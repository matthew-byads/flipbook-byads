import React, { createContext, useContext, useState, useEffect } from "react";
import { products as staticProducts, type Product } from "../data/products";
import { loadCustomProducts, saveCustomProducts } from "../components/Admin/hotspotIO";

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

    // Persist whenever custom products change
    useEffect(() => {
        saveCustomProducts(customProducts);
    }, [customProducts]);

    const allProducts = [...staticProducts, ...customProducts];

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
