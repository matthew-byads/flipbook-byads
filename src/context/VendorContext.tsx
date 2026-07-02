import React, { createContext, useContext, useState, useEffect } from "react";
import type { Vendor } from "../data/vendors";
import { fetchVendors, saveVendors as saveVendorsApi } from "../components/Admin/vendorIO";

type VendorContextType = {
    vendors: Vendor[];
    activeVendorId: string | null;
    activeVendor: Vendor | null;
    addVendor: (vendor: Vendor) => Promise<boolean>;
    updateVendor: (vendor: Vendor) => Promise<boolean>;
    deleteVendor: (vendorId: string) => Promise<boolean>;
    isLoading: boolean;
};

const VendorContext = createContext<VendorContextType | undefined>(undefined);

export function VendorProvider({ children }: { children: React.ReactNode }) {
    const [vendors, setVendors] = useState<Vendor[]>([]);
    const [activeVendorId, setActiveVendorId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Parse URL on mount to check for vendor ID
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const v = params.get("v");
        if (v) {
            sessionStorage.setItem("byads_active_vendor_id", v);
            setActiveVendorId(v);
        } else {
            const storedV = sessionStorage.getItem("byads_active_vendor_id");
            if (storedV) {
                setActiveVendorId(storedV);
            }
        }
    }, []);

    // Load vendors from S3 via API
    useEffect(() => {
        setIsLoading(true);
        fetchVendors().then((data) => {
            setVendors(data);
            setIsLoading(false);
        });
    }, []);

    const activeVendor = vendors.find(v => v.id === activeVendorId) || null;

    const addVendor = async (vendor: Vendor) => {
        const updated = [...vendors, vendor];
        const success = await saveVendorsApi(updated);
        if (success) setVendors(updated);
        return success;
    };

    const updateVendor = async (vendor: Vendor) => {
        const updated = vendors.map(v => v.id === vendor.id ? vendor : v);
        const success = await saveVendorsApi(updated);
        if (success) setVendors(updated);
        return success;
    };

    const deleteVendor = async (vendorId: string) => {
        const updated = vendors.filter(v => v.id !== vendorId);
        console.log('Attempting to delete vendor', vendorId, 'Current count', vendors.length, 'New count', updated.length);
        const success = await saveVendorsApi(updated);
        if (success) {
            setVendors(updated);
            console.log('Delete successful, updated count', updated.length);
        } else {
            console.error('Delete failed for vendor', vendorId);
        }
        return success;
    };

    return (
        <VendorContext.Provider value={{ 
            vendors, 
            activeVendorId, 
            activeVendor, 
            addVendor, 
            updateVendor, 
            deleteVendor,
            isLoading
        }}>
            {children}
        </VendorContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useVendors() {
    const context = useContext(VendorContext);
    if (context === undefined) {
        throw new Error("useVendors must be used within a VendorProvider");
    }
    return context;
}
