import { useState } from "react";
import { type Product } from "../../data/products";
import { cn } from "../../utils/cn";

type ProductFormProps = {
    initialData?: Partial<Product>;
    onSubmit: (product: Partial<Product>) => void;
    onCancel: () => void;
    className?: string;
};

export function ProductForm({ initialData, onSubmit, onCancel, className }: ProductFormProps) {
    const [name, setName] = useState(initialData?.name || "");
    const [price, setPrice] = useState(initialData?.price?.toString() || "");
    const [currency, setCurrency] = useState(initialData?.currency || "COP");
    const [sku, setSku] = useState(initialData?.sku || "");
    const [variant, setVariant] = useState(initialData?.variant || "");
    const [image, setImage] = useState(initialData?.image || "");
    const [talla, setTalla] = useState(initialData?.talla || "");
    const [tamano, setTamano] = useState(initialData?.tamaño || "");
    const [color, setColor] = useState(initialData?.color || "");

    // Simple validation
    const isValid = name.trim().length > 0;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isValid) return;

        onSubmit({
            name,
            price: price ? parseInt(price.replace(/\D/g, "") || "0") : undefined,
            currency,
            sku: sku || undefined,
            variant: variant || undefined,
            image: image || undefined,
            talla: talla || undefined,
            tamaño: tamano || undefined,
            color: color || undefined,
        });
    };

    return (
        <form onSubmit={handleSubmit} className={cn("flex flex-col gap-3", className)}>
            <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Product Name *</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
                    placeholder="e.g. Summer T-Shirt"
                />
            </div>

            <div className="flex gap-2">
                <div className="flex-1">
                    <label className="block text-xs font-medium text-gray-700 mb-1">Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
                        placeholder="0"
                    />
                </div>
                <div className="w-24">
                    <label className="block text-xs font-medium text-gray-700 mb-1">Currency</label>
                    <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
                    >
                        <option value="COP">COP</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>
            </div>

            <div className="flex gap-2">
                <div className="flex-1">
                    <label className="block text-xs font-medium text-gray-700 mb-1">SKU / Ref</label>
                    <input
                        type="text"
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
                        placeholder="REF-001"
                    />
                </div>
                <div className="flex-1">
                    <label className="block text-xs font-medium text-gray-700 mb-1">Variant</label>
                    <input
                        type="text"
                        value={variant}
                        onChange={(e) => setVariant(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
                        placeholder="e.g. Pack of 3"
                    />
                </div>
            </div>

            <div className="flex gap-2">
                <div className="flex-1">
                    <label className="block text-xs font-medium text-gray-700 mb-1">Talla (Size)</label>
                    <input
                        type="text"
                        value={talla}
                        onChange={(e) => setTalla(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
                        placeholder="S, M, L..."
                    />
                </div>
                <div className="flex-1">
                    <label className="block text-xs font-medium text-gray-700 mb-1">Tamaño</label>
                    <input
                        type="text"
                        value={tamano}
                        onChange={(e) => setTamano(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
                        placeholder="40x50..."
                    />
                </div>
                <div className="flex-1">
                    <label className="block text-xs font-medium text-gray-700 mb-1">Color</label>
                    <input
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
                        placeholder="Red..."
                    />
                </div>
            </div>

            <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Image URL</label>
                <input
                    type="url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
                    placeholder="https://..."
                />
            </div>

            <div className="flex gap-2 mt-2">
                <button
                    type="submit"
                    disabled={!isValid}
                    className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800 disabled:opacity-50 font-medium transition-colors"
                >
                    Save Product
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 font-medium transition-colors"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}
