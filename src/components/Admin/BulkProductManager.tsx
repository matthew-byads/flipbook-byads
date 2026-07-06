import { useState, useRef } from "react";
import { useProducts } from "../../context/ProductContext";
import { cn } from "../../utils/cn";
import { saveProductsCsvToS3, fetchProductsCsv, parseUploadedFile, rawRowsToCsv } from "./productIO";

export function BulkProductManager() {
    const { addProduct, updateProduct, allProducts } = useProducts();
    const [isImporting, setIsImporting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsImporting(true);
        setError(null);

        try {
            const { products, rawRows } = await parseUploadedFile(file);

            if (products.length === 0) {
                throw new Error("No valid products found in file");
            }

            const existingIds = new Set(allProducts.map(p => p.id));
            let importedCount = 0;
            let updatedCount = 0;
            for (const product of products) {
                if (existingIds.has(product.id)) {
                    // Assume updateProduct exists on ProductContext (we need to destructure it if it does)
                    // Let's just destructure it from useProducts()
                    updateProduct(product);
                    updatedCount++;
                } else {
                    addProduct(product);
                    existingIds.add(product.id);
                    importedCount++;
                }
            }

            if (rawRows.length > 0) {
                const csvContent = rawRowsToCsv(rawRows);
                saveProductsCsvToS3(csvContent).then(success => {
                    if (!success) console.error('Failed to sync CSV to S3');
                });
            }

            if (fileInputRef.current) fileInputRef.current.value = "";
            alert(`Successfully added ${importedCount} and updated ${updatedCount} products!`);
        } catch (err) {
            const message = err instanceof Error ? err.message : "Failed to parse file";
            setError(message);
        } finally {
            setIsImporting(false);
        }
    };

    return (
        <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 mb-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Bulk Product Import</h3>
                <div className="text-[10px] text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">.CSV / .XLSX supported</div>
            </div>

            <p className="text-xs text-gray-500 mb-4">
                Upload a CSV or XLSX file with columns: <br />
                <code className="text-[10px] bg-red-50 text-red-600 px-1 py-0.5 rounded">nombre, precio, moneda, talla, tamaño, color, referencia</code>
            </p>
            {/* Download current CSV from S3 */}
            <button
                onClick={async () => {
                    const csv = await fetchProductsCsv();
                    const header = ['Nombre', 'Precio', 'Moneda', 'Talla (si aplica)', 'Tamaño (si aplica)', 'Color', 'Referencia'];
                    const rows = csv.map(p => [
                        p.name, p.price?.toString() || '', p.currency || 'COP', 
                        p.talla || '', p.tamaño || '', p.color || '', p.referencia || ''
                    ].map(v => v.includes(',') ? `"${v}"` : v).join(','));
                    const blob = new Blob([header.join(',') + '\n' + rows.join('\n')], { type: 'text/csv' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url; a.download = 'products.csv'; a.click();
                    URL.revokeObjectURL(url);
                }}
                className="px-3 py-1.5 bg-gray-800 text-white text-xs rounded hover:bg-gray-700 transition-colors mb-2"
            >Download Current CSV</button>

            <div className="relative">
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv,.xlsx"
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
                            <span className="text-sm font-medium text-gray-700">Click to upload file</span>
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
                                <div className="flex gap-2 mt-0.5 flex-wrap">
                                    {p.price && <span className="text-[10px] text-gray-500">{p.currency} {p.price.toLocaleString()}</span>}
                                    {p.color && <span className="text-[10px] bg-purple-50 text-purple-600 px-1 rounded">Color: {p.color}</span>}
                                    {p.referencia && <span className="text-[10px] bg-amber-50 text-amber-600 px-1 rounded">Ref: {p.referencia}</span>}
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
