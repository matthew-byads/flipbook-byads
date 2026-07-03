export interface Settings {
    defaultWhatsapp?: string;
}

const S3_SETTINGS_URL = "https://flipbook-four-elements.s3.us-east-2.amazonaws.com/settings.json";

export async function fetchSettings(): Promise<Settings> {
    try {
        const response = await fetch(S3_SETTINGS_URL, { cache: "no-store" });
        if (response.ok) {
            const data = await response.json();
            return data as Settings;
        }
        if (response.status === 404) {
            return {};
        }
    } catch (err) {
        console.error("Failed to fetch settings from S3", err);
    }
    return {};
}

export async function saveSettings(settings: Settings): Promise<boolean> {
    try {
        const { AwsClient } = await import("aws4fetch");
        const aws = new AwsClient({
            accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
            secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
            region: import.meta.env.VITE_AWS_REGION || "us-east-2",
        });

        const res = await aws.fetch(S3_SETTINGS_URL, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(settings),
        });
        return res.ok;
    } catch (err) {
        console.error("Failed to save settings to S3", err);
        return false;
    }
}
