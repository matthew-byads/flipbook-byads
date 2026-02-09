import { useState, useMemo } from "react";
import { type Product } from "../../data/products";
import { cn } from "../../utils/cn";

type ProductSelectProps = {
    products: Product[];
    selectedProductId?: string;
    onSelect: (productId: string) => void;
    className?: string;
};

export function ProductSelect({ products, selectedProductId, onSelect, className }: ProductSelectProps) {
    const [search, setSearch] = useState("");
    const [showProducts, setShowProducts] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const filteredProducts = useMemo(() => {
        if (!search) return products;
        const lower = search.toLowerCase();
        return products.filter(
            (p) =>
                p.name.toLowerCase().includes(lower) ||
                p.sku?.toLowerCase().includes(lower)
        );
    }, [products, search]);

    return (
        <div className={cn("flex flex-col gap-2 p-2 bg-white rounded-lg border border-gray-200 shadow-sm", className)}>
            <input
                type="text"
                placeholder="Search products..."
                value={selectedProduct?.name}
                onChange={(e) => setSearch(e.target.value)}
                onClick={() => setShowProducts(true)}
                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
            />
            <div className={cn("max-h-48 overflow-y-auto space-y-1", showProducts ? "block" : "hidden")}>
                {filteredProducts.map((p) => (
                    <button
                        key={p.id}
                        onClick={() => {
                            onSelect(p.id);
                            setShowProducts(false);
                            setSelectedProduct(p);
                        }}
                        className={cn(
                            "w-full text-left px-3 py-2 text-sm rounded-md transition-colors flex items-center justify-between group",
                            selectedProductId === p.id
                                ? "bg-black text-white"
                                : "hover:bg-gray-100 text-gray-700"
                        )}
                    >
                        <div className="flex flex-col">
                            <span className="font-medium">{p.name}</span>
                            {p.sku && <span className={cn("text-xs", selectedProductId === p.id ? "text-gray-300" : "text-gray-400")}>{p.sku}</span>}
                        </div>
                        {p.image && (
                            <img src={p.image} alt="" className="w-8 h-8 rounded object-cover ml-2 border border-gray-200" />
                        )}
                    </button>
                ))}
                {filteredProducts.length === 0 && (
                    <div className="text-center text-gray-400 text-xs py-2">No products found</div>
                )}
            </div>
        </div>
    );
}
