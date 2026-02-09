import { useState, useEffect, useRef } from "react";
import { setAdminUnlocked } from "./hotspotIO";
import { cn } from "../../utils/cn";

type AdminUnlockModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onUnlock: () => void;
};

export function AdminUnlockModal({ isOpen, onClose, onUnlock }: AdminUnlockModalProps) {
    const [passcode, setPasscode] = useState("");
    const [error, setError] = useState(false);
    const [remember, setRemember] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Auto-focus input on mount
        setTimeout(() => inputRef.current?.focus(), 100);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const correctPasscode = import.meta.env.VITE_ADMIN_PASSCODE || "1234";

        if (passcode === correctPasscode) {
            if (remember) {
                setAdminUnlocked(true);
            }
            onUnlock();
            onClose();
        } else {
            setError(true);
            setPasscode("");
            inputRef.current?.focus();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm animate-in zoom-in-95 duration-200">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-900">Admin Unlock</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Passcode</label>
                        <input
                            ref={inputRef}
                            type="password"
                            value={passcode}
                            onChange={(e) => {
                                setPasscode(e.target.value);
                                setError(false);
                            }}
                            className={cn(
                                "w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 transition-all",
                                error
                                    ? "border-red-300 focus:ring-red-200 bg-red-50"
                                    : "border-gray-200 focus:ring-black/10"
                            )}
                            placeholder="Enter passcode"
                        />
                        {error && <p className="text-red-500 text-xs mt-1">Incorrect passcode</p>}
                    </div>

                    <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={remember}
                            onChange={(e) => setRemember(e.target.checked)}
                            className="rounded border-gray-300 text-black focus:ring-black/20"
                        />
                        <span>Remember on this device</span>
                    </label>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2.5 rounded-xl font-medium hover:bg-gray-800 transition-colors active:scale-[0.98]"
                    >
                        Unlock Admin Mode
                    </button>
                </form>
            </div>
        </div>
    );
}
