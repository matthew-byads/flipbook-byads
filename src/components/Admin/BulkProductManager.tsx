import { useState, useRef } from "react";
import { useProducts } from "../../context/ProductContext";
import { generateId } from "../../utils/id";
import { type Product } from "../../data/products";
import { cn } from "../../utils/cn";

export function BulkProductManager() {
    const { addProduct, allProducts } = useProducts();
    const [isImporting, setIsImporting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsImporting(true);
        setError(null);

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const text = event.target?.result as string;
                if (!text) throw new Error("Could not read file");

                const lines = text.split("\n").filter(l => l.trim());
                if (lines.length === 0) throw new Error("File is empty");

                // Detect delimiter: check first line for ; or ,
                const firstLine = lines[0];
                const delimiter = firstLine.includes(";") ? ";" : ",";

                const rows = lines.map(line => line.split(delimiter).map(cell => cell.trim()));

                // Assuming first row is header or not, let's be flexible.
                // Required format: nombre, precio, moneda, talla, tamaño, color

                let startIndex = 0;
                // Check if first row is header
                const firstRow = rows[0];
                if (firstRow[0] && (firstRow[0].toLowerCase().includes("nombre") || firstRow[0].toLowerCase().includes("name"))) {
                    startIndex = 1;
                }

                let importedCount = 0;
                for (let i = startIndex; i < rows.length; i++) {
                    const row = rows[i];
                    if (row.length < 2 || !row[0]) continue; // Skip empty/invalid rows

                    // Ensure we have at least 6 columns (even if empty)
                    const [nombre, precio, moneda, talla, tamano, color] = row;

                    const newProduct: Product = {
                        id: `bulk-${generateId()}`,
                        name: nombre,
                        price: precio ? parseInt(precio.replace(/\D/g, "") || "0") : undefined,
                        currency: moneda || "COP",
                        talla: talla || undefined,
                        tamaño: tamano || undefined,
                        color: color || undefined,
                    };

                    addProduct(newProduct);
                    importedCount++;
                }

                if (fileInputRef.current) fileInputRef.current.value = "";
                alert(`Successfully imported ${importedCount} products!`);
            } catch (err) {
                const message = err instanceof Error ? err.message : "Failed to parse CSV";
                setError(message);
            } finally {
                setIsImporting(false);
            }
        };

        reader.onerror = () => {
            setError("Error reading file");
            setIsImporting(false);
        };

        reader.readAsText(file);
    };

    return (
        <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 mb-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Bulk Product Import</h3>
                <div className="text-[10px] text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">.CSV supported</div>
            </div>

            <p className="text-xs text-gray-500 mb-4">
                Upload a CSV file with columns: <br />
                <code className="text-[10px] bg-red-50 text-red-600 px-1 py-0.5 rounded">nombre, precio, moneda, talla, tamaño, color</code>
            </p>

            <div className="relative">
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="csv-upload"
                />
                <label
                    htmlFor="csv-upload"
                    className={cn(
                        "flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer transition-all",
                        isImporting ? "border-gray-300 bg-gray-50" : "border-gray-200 hover:border-black hover:bg-black/[0.02]",
                        error ? "border-red-200 bg-red-50" : ""
                    )}
                >
                    {isImporting ? (
                        <div className="flex flex-col items-center">
                            <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin mb-2" />
                            <span className="text-sm font-medium">Importing...</span>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <span className="text-sm font-medium text-gray-700">Click to upload CSV</span>
                            <span className="text-[10px] text-gray-400 mt-1">or drag and drop</span>
                        </div>
                    )}
                </label>
            </div>

            {error && (
                <div className="mt-3 p-2 bg-red-50 border border-red-100 rounded-lg text-xs text-red-600">
                    {error}
                </div>
            )}

            <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">Currently Installed Products ({allProducts.length})</h4>
                </div>
                <div className="max-h-64 overflow-y-auto divide-y divide-gray-50 bg-gray-50 rounded-lg border border-gray-100">
                    {allProducts.map((p) => (
                        <div key={p.id} className="p-3 flex items-center justify-between group hover:bg-white transition-colors">
                            <div className="min-w-0">
                                <div className="text-sm font-medium text-gray-900 truncate">{p.name}</div>
                                <div className="flex gap-2 mt-0.5">
                                    {p.price && <span className="text-[10px] text-gray-500">{p.currency} {p.price.toLocaleString()}</span>}
                                    {p.talla && <span className="text-[10px] bg-blue-50 text-blue-600 px-1 rounded">Talla: {p.talla}</span>}
                                    {p.tamaño && <span className="text-[10px] bg-green-50 text-green-600 px-1 rounded">Tamaño: {p.tamaño}</span>}
                                </div>
                            </div>
                            <div className="text-[10px] text-gray-300 group-hover:text-gray-400 transition-colors">
                                #{p.id.slice(-4)}
                            </div>
                        </div>
                    ))}
                    {allProducts.length === 0 && (
                        <div className="p-8 text-center text-gray-400 text-xs">
                            No products found. Import a CSV to get started.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
