import React, { createContext, useContext, useState, useEffect } from "react";
import { type Settings, fetchSettings, saveSettings as saveSettingsApi } from "../components/Admin/settingsIO";

type SettingsContextType = {
    settings: Settings;
    updateSettings: (newSettings: Settings) => Promise<boolean>;
    isLoading: boolean;
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
    const [settings, setSettings] = useState<Settings>({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchSettings().then((data) => {
            setSettings(data);
            setIsLoading(false);
        });
    }, []);

    const updateSettings = async (newSettings: Settings) => {
        const success = await saveSettingsApi(newSettings);
        if (success) {
            setSettings(newSettings);
        }
        return success;
    };

    return (
        <SettingsContext.Provider value={{ settings, updateSettings, isLoading }}>
            {children}
        </SettingsContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSettings() {
    const context = useContext(SettingsContext);
    if (context === undefined) {
        throw new Error("useSettings must be used within a SettingsProvider");
    }
    return context;
}
