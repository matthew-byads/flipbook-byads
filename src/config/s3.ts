// Permanent IAM user: flipbook-fe-s3
// Scoped to s3:GetObject + s3:PutObject on flipbook-four-elements/* only
export const S3_CONFIG = {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID || "",
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || "",
    region: import.meta.env.VITE_AWS_REGION || "us-east-2",
    bucket: "flipbook-four-elements",
} as const;
