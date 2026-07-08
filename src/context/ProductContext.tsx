import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { products as staticProducts, type Product } from "../data/products";
import { loadCustomProducts, saveCustomProducts } from "../components/Admin/hotspotIO";
import { fetchProductsCsv } from "../components/Admin/productIO";

type ProductContextType = {
    allProducts: Product[];
    addProduct: (product: Product) => void;
    updateProduct: (product: Product) => void;
    deleteProduct: (productId: string) => void;
    getProduct: (id: string) => Product | undefined;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
    const [customProducts, setCustomProducts] = useState<Product[]>(() => loadCustomProducts());
    const [s3Products, setS3Products] = useState<Product[]>([]);

    // Persist whenever custom products change
    useEffect(() => {
        saveCustomProducts(customProducts);
    }, [customProducts]);

    // Load the managed catalog from S3 (source of truth when present, like pages/hotspots)
    useEffect(() => {
        fetchProductsCsv()
            .then((products) => {
                if (products.length > 0) setS3Products(products);
            })
            .catch((err) => console.error("Failed to load products from S3", err));
    }, []);

    // Merge by id: S3 catalog (or bundled seed as fallback) overlaid with any
    // locally-created/imported products. Later sources override earlier ones.
    const allProducts = useMemo(() => {
        const base = s3Products.length > 0 ? s3Products : staticProducts;
        const map = new Map<string, Product>();
        for (const p of base) map.set(p.id, p);
        for (const p of customProducts) map.set(p.id, p);
        return Array.from(map.values());
    }, [s3Products, customProducts]);

    const addProduct = (product: Product) => {
        setCustomProducts(prev => [...prev, product]);
    };

    const updateProduct = (product: Product) => {
        setCustomProducts(prev => prev.map(p => p.id === product.id ? product : p));
    };

    const deleteProduct = (productId: string) => {
        setCustomProducts(prev => prev.filter(p => p.id !== productId));
    };

    const getProduct = (id: string) => {
        return allProducts.find(p => p.id === id);
    };

    return (
        <ProductContext.Provider value={{ allProducts, addProduct, updateProduct, deleteProduct, getProduct }}>
            {children}
        </ProductContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProducts() {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;
}
