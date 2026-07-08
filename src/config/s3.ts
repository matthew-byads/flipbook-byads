// S3 credentials for direct browser writes, scoped to
// s3:GetObject + s3:PutObject on flipbook-four-elements/* only.
//
// Supports both permanent IAM user keys (AKIA…) and temporary STS credentials
// (ASIA…). Temporary credentials REQUIRE a session token — set
// VITE_AWS_SESSION_TOKEN alongside the key/secret, or every signed request
// fails with 403 InvalidAccessKeyId.
export const S3_CONFIG = {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID || "",
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || "",
    sessionToken: import.meta.env.VITE_AWS_SESSION_TOKEN || undefined,
    region: import.meta.env.VITE_AWS_REGION || "us-east-2",
    bucket: "flipbook-four-elements",
} as const;
