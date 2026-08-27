export const S3_CONFIG = {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID || "",
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || "",
    sessionToken: import.meta.env.VITE_AWS_SESSION_TOKEN || undefined,
    region: import.meta.env.VITE_AWS_REGION || "us-east-2",
    bucket: "flipbook-four-elements-new",
} as const;
