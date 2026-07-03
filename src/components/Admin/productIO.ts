import type { Product } from "../../data/products";

const S3_PRODUCTS_URL =
    "https://flipbook-four-elements.s3.us-east-2.amazonaws.com/products.csv";

// ─── Types ────────────────────────────────────────────────────────────────────

/** A raw row as parsed from the V2 CSV/XLSX before expansion. */
export type RawProductRow = {
    nombre: string;
    precio: string;
    moneda: string;
    talla: string;
    tamaño: string;
    /** Color category string — may be comma-separated (e.g. "Negro, Azul, Sky blue") */
    color: string;
    /** Specific design/variant name; empty when color holds a list */
    referencia: string;
};

// ─── ID helpers ───────────────────────────────────────────────────────────────

function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

function buildProductId(nombre: string, color: string, referencia: string): string {
    if (referencia) return slugify(referencia);
    return slugify(`${nombre}-${color}`);
}

// ─── V2 Row → Product expansion ───────────────────────────────────────────────

/**
 * Expands a single V2 raw row into one or more Product objects.
 *
 * Pattern A: Referencia has a value → single product (the referencia IS the variant)
 * Pattern B: Color has a comma-separated list → one product per color entry
 */
export function expandRawRow(row: RawProductRow): Product[] {
    const nombre = row.nombre.trim();
    const precio = row.precio ? Number(row.precio.replace(/\D/g, "") || "0") : undefined;
    const moneda = row.moneda.trim() || "COP";
    const talla = row.talla.trim() || undefined;
    const tamaño = row.tamaño.trim() || undefined;
    const colorRaw = row.color.trim();
    const referencia = row.referencia.trim();

    if (!nombre) return [];

    // Pattern A — specific design/variant (referencia is the key)
    if (referencia) {
        return [
            {
                id: buildProductId(nombre, colorRaw, referencia),
                name: nombre,
                price: precio,
                currency: moneda,
                talla,
                tamaño,
                color: colorRaw || undefined,
                referencia,
            },
        ];
    }

    // Pattern B — comma-separated color list → one product per color
    const colors = colorRaw
        .split(",")
        .map((c) => c.trim().replace(/\.$/, ""))
        .filter(Boolean);

    if (colors.length === 0) {
        // No colors at all — create one product with no color
        return [
            {
                id: buildProductId(nombre, "", ""),
                name: nombre,
                price: precio,
                currency: moneda,
                talla,
                tamaño,
            },
        ];
    }

    return colors.map((color) => ({
        id: buildProductId(nombre, color, ""),
        name: nombre,
        price: precio,
        currency: moneda,
        talla,
        tamaño,
        color,
    }));
}

// ─── CSV Parsing ──────────────────────────────────────────────────────────────

/**
 * Parse a V2 CSV text (or backward-compatible V1) into raw rows.
 * Handles both comma and semicolon delimiters.
 */
export function parseCsvToRawRows(text: string): RawProductRow[] {
    const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
    if (lines.length === 0) return [];

    const delimiter = lines[0].includes(";") ? ";" : ",";
    const header = lines[0].split(delimiter).map((h) => h.trim().toLowerCase());

    const idx = {
        nombre: header.indexOf("nombre"),
        precio: header.indexOf("precio"),
        moneda: header.indexOf("moneda"),
        talla:
            header.indexOf("talla (si aplica)") !== -1
                ? header.indexOf("talla (si aplica)")
                : header.indexOf("talla"),
        tamaño:
            header.indexOf("tamaño (si aplica)") !== -1
                ? header.indexOf("tamaño (si aplica)")
                : header.indexOf("tamaño"),
        color: header.indexOf("color"),
        referencia: header.indexOf("referencia"),
    };

    const rows: RawProductRow[] = [];
    for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(delimiter);
        const nombre = (cols[idx.nombre] ?? "").trim();
        if (!nombre) continue;

        rows.push({
            nombre,
            precio: (cols[idx.precio] ?? "").trim(),
            moneda: (cols[idx.moneda] ?? "").trim(),
            talla: (cols[idx.talla] ?? "").trim(),
            tamaño: (cols[idx.tamaño] ?? "").trim(),
            color: (cols[idx.color] ?? "").trim(),
            referencia: (cols[idx.referencia] ?? "").trim(),
        });
    }
    return rows;
}

// ─── XLSX Parsing (pure JS / ZIP) ─────────────────────────────────────────────

/**
 * Parse a .xlsx ArrayBuffer into RawProductRow[].
 * XLSX is a ZIP file — we read xl/sharedStrings.xml and xl/worksheets/sheet1.xml.
 */
export async function parseXlsxToRawRows(buffer: ArrayBuffer): Promise<RawProductRow[]> {
    // Dynamically import JSZip-like approach using DecompressionStream (not available in all browsers)
    // Fallback: parse the zip manually using DataView
    const uint8 = new Uint8Array(buffer);
    const files = unzipAll(uint8);

    const sharedStringsXml = files["xl/sharedStrings.xml"];
    const sheetXml = files["xl/worksheets/sheet1.xml"];

    if (!sheetXml) throw new Error("Could not find sheet data in XLSX file");

    const strings: string[] = sharedStringsXml
        ? parseSharedStrings(sharedStringsXml)
        : [];

    return parseSheetXml(sheetXml, strings);
}

// ─── Minimal ZIP extractor ────────────────────────────────────────────────────

function unzipAll(data: Uint8Array): Record<string, string> {
    const files: Record<string, string> = {};
    let offset = 0;
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    const decoder = new TextDecoder("utf-8");

    while (offset < data.length - 4) {
        const sig = view.getUint32(offset, true);
        if (sig !== 0x04034b50) break; // local file header signature

        const flags = view.getUint16(offset + 6, true);
        const compression = view.getUint16(offset + 8, true);
        const compressedSize = view.getUint32(offset + 18, true);
        const uncompressedSize = view.getUint32(offset + 22, true);
        const fileNameLength = view.getUint16(offset + 26, true);
        const extraLength = view.getUint16(offset + 28, true);

        const fileNameBytes = data.slice(offset + 30, offset + 30 + fileNameLength);
        const fileName = decoder.decode(fileNameBytes);

        const dataStart = offset + 30 + fileNameLength + extraLength;
        const compressedData = data.slice(dataStart, dataStart + compressedSize);

        if (compression === 0) {
            // Stored (no compression)
            files[fileName] = decoder.decode(compressedData);
        } else if (compression === 8) {
            // Deflate — use DecompressionStream if available
            try {
                const ds = new DecompressionStream("deflate-raw");
                const writer = ds.writable.getWriter();
                const reader = ds.readable.getReader();
                writer.write(compressedData);
                writer.close();

                // We need sync-style reading here — store a sentinel and handle async later
                // For now, mark as needing async decompression
                files[`__deflate__${fileName}`] = Array.from(compressedData).join(",");
                void uncompressedSize; // used below
                void flags;
            } catch {
                // DecompressionStream not available — skip
            }
        }

        offset = dataStart + compressedSize;

        // Skip data descriptor if present
        if (flags & 0x08) {
            if (view.getUint32(offset, true) === 0x08074b50) offset += 4;
            offset += 12;
        }
    }

    return files;
}

/** Async version that handles deflate-compressed entries using DecompressionStream */
async function unzipAllAsync(data: Uint8Array): Promise<Record<string, string>> {
    const files: Record<string, string> = {};
    let offset = 0;
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    const decoder = new TextDecoder("utf-8");

    while (offset < data.length - 4) {
        const sig = view.getUint32(offset, true);
        if (sig !== 0x04034b50) break;

        const flags = view.getUint16(offset + 6, true);
        const compression = view.getUint16(offset + 8, true);
        const compressedSize = view.getUint32(offset + 18, true);
        const fileNameLength = view.getUint16(offset + 26, true);
        const extraLength = view.getUint16(offset + 28, true);

        const fileNameBytes = data.slice(offset + 30, offset + 30 + fileNameLength);
        const fileName = decoder.decode(fileNameBytes);

        const dataStart = offset + 30 + fileNameLength + extraLength;
        const compressedData = data.slice(dataStart, dataStart + compressedSize);

        if (compression === 0) {
            files[fileName] = decoder.decode(compressedData);
        } else if (compression === 8) {
            try {
                const ds = new DecompressionStream("deflate-raw");
                const writer = ds.writable.getWriter();
                const reader = ds.readable.getReader();
                writer.write(compressedData);
                writer.close();

                const chunks: Uint8Array[] = [];
                let done = false;
                while (!done) {
                    const result = await reader.read();
                    done = result.done;
                    if (result.value) chunks.push(result.value);
                }

                const totalLen = chunks.reduce((sum, c) => sum + c.length, 0);
                const merged = new Uint8Array(totalLen);
                let pos = 0;
                for (const chunk of chunks) {
                    merged.set(chunk, pos);
                    pos += chunk.length;
                }
                files[fileName] = decoder.decode(merged);
            } catch {
                // DecompressionStream unavailable — skip file
            }
        }

        offset = dataStart + compressedSize;

        if (flags & 0x08) {
            if (view.getUint32(offset, true) === 0x08074b50) offset += 4;
            offset += 12;
        }
    }

    return files;
}

// ─── XML Parsers ──────────────────────────────────────────────────────────────

function parseSharedStrings(xml: string): string[] {
    const strings: string[] = [];
    // Match each <si>...</si> block
    const siRegex = /<si>([\s\S]*?)<\/si>/g;
    const tRegex = /<t[^>]*>([\s\S]*?)<\/t>/g;
    let siMatch: RegExpExecArray | null;
    while ((siMatch = siRegex.exec(xml)) !== null) {
        const siContent = siMatch[1];
        let combined = "";
        let tMatch: RegExpExecArray | null;
        tRegex.lastIndex = 0;
        while ((tMatch = tRegex.exec(siContent)) !== null) {
            combined += xmlDecode(tMatch[1]);
        }
        strings.push(combined);
    }
    return strings;
}

function parseSheetXml(xml: string, sharedStrings: string[]): RawProductRow[] {
    // Extract all rows
    const rowRegex = /<row[^>]*r="(\d+)"[^>]*>([\s\S]*?)<\/row>/g;
    const cellRegex = /<c r="([A-Z]+)\d+"[^>]*(?:t="([^"]*)")?[^>]*>(?:<v>([^<]*)<\/v>)?/g;

    let headerRow: Record<string, string> | null = null;
    const rawRows: RawProductRow[] = [];

    let rowMatch: RegExpExecArray | null;
    while ((rowMatch = rowRegex.exec(xml)) !== null) {
        const rowNum = parseInt(rowMatch[1]);
        const rowContent = rowMatch[2];

        const cells: Record<string, string> = {};
        let cellMatch: RegExpExecArray | null;
        cellRegex.lastIndex = 0;
        while ((cellMatch = cellRegex.exec(rowContent)) !== null) {
            const col = cellMatch[1];
            const type = cellMatch[2] ?? "";
            const rawVal = cellMatch[3] ?? "";

            let value = rawVal;
            if (type === "s" && rawVal !== "") {
                value = sharedStrings[parseInt(rawVal)] ?? "";
            } else if (type === "inlineStr") {
                const vMatch = /<is>[\s\S]*?<t>([^<]*)<\/t>/g.exec(rowContent);
                value = vMatch ? xmlDecode(vMatch[1]) : rawVal;
            }
            cells[col] = value.trim();
        }

        if (rowNum === 1) {
            // Header row — map column letters to field names
            headerRow = cells;
            continue;
        }

        if (!headerRow) continue;

        // Map header positions
        const colMap = buildColMap(headerRow);
        const nombre = cells[colMap.nombre] ?? "";
        if (!nombre.trim()) continue;

        rawRows.push({
            nombre: nombre.trim(),
            precio: (cells[colMap.precio] ?? "").trim(),
            moneda: (cells[colMap.moneda] ?? "").trim(),
            talla: (cells[colMap.talla] ?? "").trim(),
            tamaño: (cells[colMap.tamaño] ?? "").trim(),
            color: (cells[colMap.color] ?? "").trim(),
            referencia: (cells[colMap.referencia] ?? "").trim(),
        });
    }

    return rawRows;
}

type ColMap = Record<keyof RawProductRow, string>;

let _colMap: ColMap | null = null;
function buildColMap(headerRow: Record<string, string>): ColMap {
    if (_colMap) return _colMap;
    const map: Partial<ColMap> = {};
    for (const [col, val] of Object.entries(headerRow)) {
        const lower = val.toLowerCase().trim();
        if (lower === "nombre") map.nombre = col;
        else if (lower === "precio") map.precio = col;
        else if (lower === "moneda") map.moneda = col;
        else if (lower.startsWith("talla")) map.talla = col;
        else if (lower.startsWith("tamaño")) map.tamaño = col;
        else if (lower === "color") map.color = col;
        else if (lower === "referencia") map.referencia = col;
    }
    _colMap = map as ColMap;
    return _colMap;
}

function xmlDecode(s: string): string {
    return s
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'");
}

// ─── Public API ───────────────────────────────────────────────────────────────

/** Fetch and parse products from S3 (CSV format). */
export async function fetchProductsCsv(): Promise<Product[]> {
    try {
        const response = await fetch(S3_PRODUCTS_URL, { cache: "no-store" });
        if (response.ok) {
            const text = await response.text();
            const rawRows = parseCsvToRawRows(text);
            return rawRows.flatMap(expandRawRow);
        }
        if (response.status === 404) return [];
    } catch (err) {
        console.error("Failed to fetch products CSV from S3", err);
    }
    return [];
}

/** Parse an uploaded File (CSV or XLSX) into Products. */
export async function parseUploadedFile(file: File): Promise<{ products: Product[]; rawRows: RawProductRow[] }> {
    const isXlsx =
        file.name.endsWith(".xlsx") ||
        file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

    let rawRows: RawProductRow[];

    if (isXlsx) {
        const buffer = await file.arrayBuffer();
        const uint8 = new Uint8Array(buffer);
        const files = await unzipAllAsync(uint8);
        const sharedStringsXml = files["xl/sharedStrings.xml"] ?? "";
        const sheetXml = files["xl/worksheets/sheet1.xml"];
        if (!sheetXml) throw new Error("Invalid XLSX: sheet not found");
        _colMap = null; // reset per-file column map
        const strings = parseSharedStrings(sharedStringsXml);
        rawRows = parseSheetXml(sheetXml, strings);
    } else {
        const text = await file.text();
        rawRows = parseCsvToRawRows(text);
    }

    return {
        products: rawRows.flatMap(expandRawRow),
        rawRows,
    };
}

/** Convert raw rows back to CSV text (for S3 storage). */
export function rawRowsToCsv(rawRows: RawProductRow[]): string {
    const header = "Nombre,Precio,Moneda,Talla (si aplica),Tamaño (si aplica),Color,Referencia";
    const lines = rawRows.map((r) =>
        [r.nombre, r.precio, r.moneda, r.talla, r.tamaño, r.color, r.referencia]
            .map((v) => (v.includes(",") ? `"${v}"` : v))
            .join(",")
    );
    return [header, ...lines].join("\n");
}

/** Save products CSV to S3 using signed AWS request. */
export async function saveProductsCsvToS3(csvText: string): Promise<boolean> {
    try {
        const { AwsClient } = await import("aws4fetch");
        const aws = new AwsClient({
            accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
            secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
            region: import.meta.env.VITE_AWS_REGION || "us-east-2",
        });
        const res = await aws.fetch(S3_PRODUCTS_URL, {
            method: "PUT",
            headers: { "Content-Type": "text/csv" },
            body: csvText,
        });
        return res.ok;
    } catch (err) {
        console.error("Failed to save products CSV to S3", err);
        return false;
    }
}
