# Flipbook Catalog

A Vite + React + TypeScript application that renders an image-based catalog flipbook with shopping cart functionality and a comprehensive Admin Dashboard for managing hotspots, products, and pages.

## Features

- **Catalog Viewer**: Smooth image-based navigation with thumbnails and keyboard support.
- **Interactive Hotspots**:
  - Click product tags to view details and add to cart.
  - Supports detailed product info: Price, SKU, **Talla (Size)**, **Tamaño (Dimensions)**, and **Color**.
- **Shopping Cart**:
  - Global cart with drawer view and "Clear All" functionality.
  - Tracks origin page for each item ("From page X").
  - **WhatsApp Checkout**: Generates a pre-filled WhatsApp message with your order details.
- **Admin Dashboard**:
  - Passcode protected (default: `1234`).
  - **Bulk Product Import**: Import hundreds of products via CSV.
  - **Bulk Image Manager**: Upload whole catalogs, reorder pages, and set labels via DnD.
  - **Unified Editor**: Add, edit, delete, and move hotspots directly on the pages.
  - **Static Persistence**: Export your configuration to a `config.json` for deployment on static hosting (S3/Cloudflare).

## Setup

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Environment Configuration**:
    Copy `.env.example` to `.env` and adjust settings:
    ```bash
    cp .env.example .env
    ```
    - `VITE_WHATSAPP_PHONE`: Your WhatsApp number (country code + number, no symbols).
    - `VITE_DEFAULT_CURRENCY`: Currency symbol (default: COP).
    - `VITE_ADMIN_PASSCODE`: Passcode for Admin Mode (default: 1234).

3.  **Run Locally**:
    ```bash
    npm run dev
    ```

## Usage

### User Mode
- Navigate pages using arrows, keyboard, or thumbnails.
- Click hotspots (pins) to view products.
- Add items to cart and checkout via WhatsApp.

### Admin Mode
1.  Click "Admin" in the header or press `Ctrl + Shift + A`.
2.  Enter the passcode (default `1234`).
3.  Click the **Floating Dashboard Button** (bottom right) to manage the catalog.
4.  **Dashboard Tabs**:
    - **📍 Hotspots**: Tools for adding random hotspots or clearing pages.
    - **📦 Products**: Bulk import products via CSV (Columns: `nombre, precio, moneda, talla, tamaño, color`) or add them manually.
    - **📄 Pages**: Upload new images and drag them to reorder the flipbook.
    - **⚙️ Export**: Download `config.json` to persist changes for static deployment.
5.  **Direct Hotspot Management**: 
    - Click anywhere on a page image to place a hotspot.
    - Click an existing hotspot to edit or delete it.

## Deployment for Non-Coders

Since this application can be hosted on static services (S3, Cloudflare Pages, GitHub Pages):
1.  Admin makes changes locally in the browser.
2.  Go to **Admin Dashboard > Export** and click **Download config.json**.
3.  Upload the updated `config.json` to the root of your static hosting to publish changes to all users.

## Tech Stack

- Vite
- React 19
- TypeScript
- TailwindCSS
- Axios
