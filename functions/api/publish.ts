interface Env {
  GITHUB_TOKEN: string;
  GITHUB_OWNER: string;
  GITHUB_REPO: string;
  GITHUB_BRANCH: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO, GITHUB_BRANCH = "main" } = context.env;
  
  if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
    return new Response(JSON.stringify({ error: "Cloudflare environment variables not configured (GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO)" }), { status: 500 });
  }

  try {
    const data = (await context.request.json()) as any;
    const { hotspots, products } = data;

    if (!hotspots && !products) {
      return new Response(JSON.stringify({ error: "No data provided" }), { status: 400 });
    }

    // Helper to update a file on GitHub
    const updateFile = async (path: string, content: string, message: string) => {
      const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`;
      
      // Get current SHA
      const getRes = await fetch(url, {
        headers: {
          "Authorization": `token ${GITHUB_TOKEN}`,
          "User-Agent": "Cloudflare-Pages-Function",
          "Accept": "application/vnd.github.v3+json"
        }
      });
      
      let sha: string | undefined;
      if (getRes.ok) {
        const fileData = (await getRes.json()) as any;
        sha = fileData.sha;
      }

      // Update file
      const putRes = await fetch(url, {
        method: "PUT",
        headers: {
          "Authorization": `token ${GITHUB_TOKEN}`,
          "User-Agent": "Cloudflare-Pages-Function",
          "Content-Type": "application/json",
          "Accept": "application/vnd.github.v3+json"
        },
        body: JSON.stringify({
          message,
          content: btoa(unescape(encodeURIComponent(content))), // Base64 encode UTF-8
          sha,
          branch: GITHUB_BRANCH
        })
      });

      if (!putRes.ok) {
        const err = await putRes.text();
        throw new Error(`GitHub API error for ${path}: ${err}`);
      }
    };

    if (hotspots) {
      const hotspotsContent = `export type Hotspot = {
    id: string;
    pageId: string;
    productId?: string;
    xPct: number; // 0..100
    yPct: number; // 0..100
    label?: string; // Optional override label
    type?: "product" | "link";
    targetPageId?: string;
    widthPct?: number;
    heightPct?: number;
};

export const hotspots: Hotspot[] = ${JSON.stringify(hotspots, null, 4)};
`;
      await updateFile("src/data/hotspots.ts", hotspotsContent, "chore: update hotspots from admin panel");
    }

    if (products) {
      const productsContent = `export type Product = {
    id: string;
    name: string;
    price?: number;
    currency?: string;
    sku?: string;
    variant?: string;
    image?: string;
    talla?: string;   // Clothing size (e.g. S, M, L)
    tamaño?: string;  // Object size (e.g. 40x50cm)
    color?: string;   // Color name or hex
};

export const products: Product[] = ${JSON.stringify(products, null, 4)};
`;
      await updateFile("src/data/products.ts", productsContent, "chore: update products from admin panel");
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
