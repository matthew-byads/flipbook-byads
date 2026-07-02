import { useState } from "react";
import { type Vendor } from "../../data/vendors";
import { useVendors } from "../../context/VendorContext";
import { generateId } from "../../utils/id";

export function VendorManager() {
    const { vendors, addVendor, updateVendor, deleteVendor, isLoading } = useVendors();
    const [isCreating, setIsCreating] = useState(false);
    const [editingVendorId, setEditingVendorId] = useState<string | null>(null);
    const [formData, setFormData] = useState({ name: "", phone: "" });
    const [toast, setToast] = useState<{message: string, type: 'success' | 'error' | 'warning' | 'info'} | null>(null);

    const showToast = (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'success') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const [vendorToDelete, setVendorToDelete] = useState<string | null>(null);

    const handleCreate = async () => {
        if (!formData.name || !formData.phone) return;
        setIsCreating(false);
        const newVendor: Vendor = {
            id: generateId("v-"),
            name: formData.name,
            phone: formData.phone,
        };
        const success = await addVendor(newVendor);
        if (success) {
            setFormData({ name: "", phone: "" });
            showToast("Vendor added successfully!", "success");
        } else {
            showToast("Failed to add vendor", "error");
        }
    };

    const handleUpdate = async () => {
        if (!formData.name || !formData.phone || !editingVendorId) return;
        const vendorToUpdate = vendors.find(v => v.id === editingVendorId);
        if (vendorToUpdate) {
            const success = await updateVendor({ ...vendorToUpdate, name: formData.name, phone: formData.phone });
            if (success) {
                showToast("Vendor updated successfully!", "success");
            } else {
                showToast("Failed to update vendor", "error");
            }
        }
        setFormData({ name: "", phone: "" });
        setEditingVendorId(null);
    };

    const handleEdit = (vendor: Vendor) => {
        setFormData({ name: vendor.name, phone: vendor.phone });
        setEditingVendorId(vendor.id);
        setIsCreating(false);
    };

    const handleDeleteClick = (id: string) => {
        setVendorToDelete(id);
    };

    const confirmDelete = async () => {
        if (!vendorToDelete) return;
        const success = await deleteVendor(vendorToDelete);
        if (success) {
            showToast("Vendor deleted successfully!", "success");
        } else {
            showToast("Failed to delete vendor", "error");
        }
        setVendorToDelete(null);
    };

    const handleCopyLink = (vendorId: string) => {
        const url = new URL(window.location.href);
        url.searchParams.set("v", vendorId);
        navigator.clipboard.writeText(url.toString());
        showToast("Link copied to clipboard!", "info");
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h4 className="font-semibold text-gray-800">Manage Vendors</h4>
                {!(isCreating || editingVendorId) && (
                    <button
                        onClick={() => setIsCreating(true)}
                        className="px-3 py-1.5 bg-gray-900 text-white text-xs font-bold rounded-lg hover:bg-gray-800 cursor-pointer"
                    >
                        + Add Vendor
                    </button>
                )}
            </div>

            {(isCreating || editingVendorId) && (
                <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl flex flex-col gap-3">
                    <h5 className="text-sm font-bold">{isCreating ? "New Vendor" : "Edit Vendor"}</h5>
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full text-sm p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none"
                            placeholder="Ej. Juan Pérez"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">WhatsApp Phone (with country code)</label>
                        <input
                            type="text"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                            className="w-full text-sm p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none"
                            placeholder="Ej. 573001234567"
                        />
                    </div>
                    <div className="flex gap-2 justify-end mt-2">
                        <button
                            onClick={() => {
                                setIsCreating(false);
                                setEditingVendorId(null);
                                setFormData({ name: "", phone: "" });
                            }}
                            className="px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-200 rounded-lg cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={isCreating ? handleCreate : handleUpdate}
                            className="px-4 py-2 text-xs font-bold bg-black text-white hover:bg-gray-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                            disabled={!formData.name || !formData.phone}
                        >
                            Save
                        </button>
                    </div>
                </div>
            )}

            <div className="flex flex-col gap-2 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                {isLoading && <div className="text-sm text-gray-500 py-4 text-center">Loading vendors...</div>}
                {!isLoading && vendors.length === 0 && (
                    <div className="text-sm text-gray-500 py-4 text-center bg-gray-50 rounded-xl">No vendors created yet.</div>
                )}
                {!isLoading && vendors.map((vendor) => (
                    <div key={vendor.id} className="flex flex-col p-3 border border-gray-100 rounded-xl bg-white shadow-sm gap-2">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-sm font-bold text-gray-900">{vendor.name}</div>
                                <div className="text-xs text-gray-500">+{vendor.phone}</div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEdit(vendor)}
                                    className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                                    title="Edit"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                </button>
                                <button
                                    onClick={() => handleDeleteClick(vendor.id)}
                                    className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                    title="Delete"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                </button>
                            </div>
                        </div>
                        <div className="pt-2 border-t border-gray-50 mt-1 flex">
                            <button
                                onClick={() => handleCopyLink(vendor.id)}
                                className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                                Copy Share Link
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {toast && (
                <div className={`fixed bottom-4 right-4 px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in ${
                    toast.type === 'success' ? 'bg-green-600 text-white' :
                    toast.type === 'error' ? 'bg-red-600 text-white' :
                    toast.type === 'warning' ? 'bg-orange-500 text-white' :
                    'bg-blue-600 text-white'
                }`}>
                    {toast.message}
                </div>
            )}

            {vendorToDelete && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setVendorToDelete(null)} />
                    <div className="bg-white p-5 rounded-2xl shadow-2xl relative z-10 w-full max-w-sm animate-in zoom-in-95">
                        <h4 className="font-bold text-gray-900 mb-2">Delete Vendor?</h4>
                        <p className="text-xs text-gray-600 mb-4">Are you sure you want to delete this vendor? Links shared by them will stop working correctly.</p>
                        <div className="flex gap-2 justify-end">
                            <button
                                onClick={() => setVendorToDelete(null)}
                                className="px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 text-xs font-bold bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors cursor-pointer shadow-lg shadow-red-200"
                            >
                                Yes, Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
