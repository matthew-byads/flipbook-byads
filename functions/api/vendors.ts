import { AwsClient } from 'aws4fetch';

interface Env {
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  AWS_SESSION_TOKEN?: string;
  AWS_S3_BUCKET: string;
  AWS_REGION: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_SESSION_TOKEN, AWS_S3_BUCKET, AWS_REGION } = context.env;
  
  if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY || !AWS_S3_BUCKET || !AWS_REGION) {
    // If not configured, gracefully return an empty list
    return new Response(JSON.stringify([]), { status: 200, headers: { "Content-Type": "application/json" } });
  }

  const aws = new AwsClient({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    sessionToken: AWS_SESSION_TOKEN,
    region: AWS_REGION,
  });

  const url = `https://${AWS_S3_BUCKET}.s3.${AWS_REGION}.amazonaws.com/vendors.json`;

  try {
    const res = await aws.fetch(url);
    if (res.status === 404) {
      // Return empty array if file doesn't exist yet
      return new Response(JSON.stringify([]), { status: 200, headers: { "Content-Type": "application/json" } });
    }
    
    if (!res.ok) {
      return new Response(JSON.stringify({ error: await res.text() }), { status: res.status, headers: { "Content-Type": "application/json" } });
    }

    const data = await res.text();
    return new Response(data, {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_SESSION_TOKEN, AWS_S3_BUCKET, AWS_REGION } = context.env;
  
  if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY || !AWS_S3_BUCKET || !AWS_REGION) {
    return new Response(JSON.stringify({ error: "Missing S3 configuration in environment" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }

  const aws = new AwsClient({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    sessionToken: AWS_SESSION_TOKEN,
    region: AWS_REGION,
  });

  const url = `https://${AWS_S3_BUCKET}.s3.${AWS_REGION}.amazonaws.com/vendors.json`;

  try {
    const data = await context.request.text();
    const res = await aws.fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: data
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: await res.text() }), { status: res.status, headers: { "Content-Type": "application/json" } });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
};
