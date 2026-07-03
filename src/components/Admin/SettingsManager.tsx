import { useState, useEffect } from "react";
import { useSettings } from "../../context/SettingsContext";

function validatePhone(value: string): string | null {
    if (!value) return null; // empty is allowed (clears the setting)
    if (value.length < 7) return "Phone number must have at least 7 digits.";
    if (value.length > 12) return "Phone number must not exceed 12 digits.";
    return null;
}

export function SettingsManager() {
    const { settings, updateSettings, isLoading } = useSettings();
    const [defaultWhatsapp, setDefaultWhatsapp] = useState(settings.defaultWhatsapp || "");
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [validationError, setValidationError] = useState<string | null>(null);

    // Sync local state when settings load
    useEffect(() => {
        if (!isLoading) {
            setDefaultWhatsapp(settings.defaultWhatsapp || "");
            // If there's no saved number, start in edit mode automatically
            setIsEditing(!settings.defaultWhatsapp);
        }
    }, [settings.defaultWhatsapp, isLoading]);

    const handlePhoneChange = (value: string) => {
        // Only allow digits
        const digitsOnly = value.replace(/\D/g, "");
        setDefaultWhatsapp(digitsOnly);
        if (validationError) {
            setValidationError(validatePhone(digitsOnly));
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();

        const error = validatePhone(defaultWhatsapp);
        if (error) {
            setValidationError(error);
            return;
        }

        setIsSaving(true);
        const cleaned = defaultWhatsapp || undefined;
        const success = await updateSettings({
            ...settings,
            defaultWhatsapp: cleaned,
        });
        if (success) {
            setIsEditing(false);
            setValidationError(null);
        } else {
            alert("Failed to save settings.");
        }
        setIsSaving(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
        setValidationError(null);
    };

    const handleCancel = () => {
        setDefaultWhatsapp(settings.defaultWhatsapp || "");
        setValidationError(null);
        setIsEditing(false);
    };

    if (isLoading) {
        return <div className="p-4 text-sm text-gray-500">Loading settings...</div>;
    }

    return (
        <div className="max-w-2xl mx-auto py-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Global Settings</h2>

            <form onSubmit={handleSave} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Default WhatsApp Number
                    </label>
                    <p className="text-xs text-gray-500 mb-3">
                        This number will be used for all checkout requests unless a specific vendor is selected. Leave blank to use the default configured in the environment variables. Format: Include country code (e.g., 573001234567).
                    </p>

                    {isEditing ? (
                        <>
                            <input
                                type="tel"
                                value={defaultWhatsapp}
                                onChange={(e) => handlePhoneChange(e.target.value)}
                                onBlur={() => setValidationError(validatePhone(defaultWhatsapp))}
                                placeholder="e.g. 573001234567"
                                maxLength={12}
                                autoFocus
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none transition-shadow ${
                                    validationError ? "border-red-400" : "border-gray-300"
                                }`}
                            />
                            {validationError && (
                                <p className="text-xs text-red-500 mt-1">{validationError}</p>
                            )}
                        </>
                    ) : (
                        <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg">
                            <span className="text-sm text-gray-900 flex-1 font-mono">
                                {settings.defaultWhatsapp || <span className="text-gray-400 italic">Not set — using .env default</span>}
                            </span>
                        </div>
                    )}
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t border-gray-100">
                    {isEditing ? (
                        <>
                            {settings.defaultWhatsapp !== undefined && (
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                                >
                                    Cancel
                                </button>
                            )}
                            <button
                                type="submit"
                                disabled={isSaving || !!validationError}
                                className="px-6 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50 transition-colors"
                            >
                                {isSaving ? "Saving..." : "Save Settings"}
                            </button>
                        </>
                    ) : (
                        <button
                            type="button"
                            onClick={handleEdit}
                            className="flex items-center gap-2 px-5 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Edit
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

