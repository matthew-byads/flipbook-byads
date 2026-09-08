# Spec: Hotspot Product Reference (Referencia) Selection

## User Story

**Admin:** As an admin, I want to configure a hotspot for a specific product reference (referencia) from a dropdown, so that the hotspot shows ONLY that reference to the customer.

**Non-admin:** As a non-admin user, I want to pick the reference set by the admin from a dropdown, and then select my preferred size/tamaño, so that I can quickly choose the exact product I want.

## Problem Statement

Currently:
1. **Admin flow:** The admin selects a product by `name` (group) + `size`. There is NO way to select a specific `referencia` (design/variant). The customer always sees ALL variants within the group and picks a color themselves.
2. **Non-admin flow:** The ProductPopover shows a list of color buttons labeled by `referencia || color`. For products with many references (e.g., 70+ sublimated designs), the user must scroll through a long list to find the one they want. There is no search or filter capability.
3. **Size selection:** Currently the admin selects the size during hotspot configuration, but the user should be the one choosing the size.

This is exhausting for both admin and customer, especially for catalogs with hundreds of product references.

## Acceptance Criteria

### Admin Side (Hotspot Configuration)
- [ ] **AC1:** When editing/creating a product hotspot, the admin sees a dropdown labeled "Referencia" (replaces the Size dropdown)
- [ ] **AC2:** The Referencia dropdown lists all distinct `referencia` values from the "Referencia" column in the CSV for the selected product group. Comma-separated references in the CSV are split into individual options.
- [ ] **AC3:** The Referencia dropdown ONLY reads from the `referencia` field — NOT from `color`
- [ ] **AC4:** The admin selects ONE specific reference — the hotspot is locked to that reference
- [ ] **AC5:** The selected reference is stored on the hotspot as `productReferencia`
- [ ] **AC6:** The admin does NOT select a size — size selection is deferred to the non-admin user
- [ ] **AC7:** If a product group has only one reference, the dropdown auto-selects it

### Non-Admin Side (Customer Experience)
- [ ] **AC8:** When a hotspot has a `productReferencia` set, the ProductPopover opens with ONLY that reference's variants displayed
- [ ] **AC9:** The customer can select the size/tamaño from a dropdown within the ProductPopover
- [ ] **AC10:** The customer CANNOT switch to a different reference — only the one set by the admin is shown
- [ ] **AC11:** When no `productReferencia` is set, the behavior is unchanged (backward compatible)

## Technical Requirements

### Data Model Changes

**Hotspot type (src/data/hotspots.ts):**
```ts
export type Hotspot = {
    id: string;
    pageId: string;
    productId?: string;
    productName?: string;
    productSize?: string;        // DEPRECATED for new hotspots (kept for backward compat)
    productReferencia?: string;  // NEW: locked reference for this hotspot
    xPct: number;
    yPct: number;
    label?: string;
    type?: "product" | "link" | "video";
    targetPageId?: string;
    videoUrl?: string;
    widthPct?: number;
    heightPct?: number;
};
```

### Admin Components

**ProductSelect (src/components/Admin/ProductSelect.tsx):**
- Replace Size dropdown with "Referencia" dropdown
- Options: distinct `referencia` values from products matching the selected name
- Referencia options come ONLY from the `referencia` field (CSV column "Referencia")
- Comma-separated values in the CSV `referencia` field are split into individual options during CSV parsing (already handled by `expandRawRow()`)
- Update `ProductSelection` type:
  ```ts
  export type ProductSelection = {
      name: string;
      referencia?: string;  // NEW: replaces size for admin selection
  };
  ```
- Show info: "Customer will see **[referencia name]** and pick a size"

**AdminPanel (src/components/Admin/AdminPanel.tsx):**
- Pass `referencia` through `handleUpdateProductSelection`
- Store `productReferencia` on hotspot when creating/editing
- Load existing `productReferencia` when editing a hotspot
- Do NOT store `productSize` for new hotspots (size is chosen by customer)

### Non-Admin Components

**PageStage (src/components/Catalog/PageStage.tsx):**
- When resolving variants, filter by `hotspot.productReferencia`:
  ```ts
  // Filter products by name AND reference
  const variants = allProducts.filter(
      p => p.name === hotspot.productName
      && p.referencia === hotspot.productReferencia
  );
  ```
- If no `productReferencia` is set, fall back to current behavior (all variants for the name)

**ProductPopover (src/components/Catalog/ProductPopover.tsx):**
- Add size/tamaño selector dropdown (if product has sizes)
- Size options: distinct `tamaño || talla` values from the filtered variants
- Customer picks a size → filters to the exact variant → shows price, image, etc.
- If only one size exists, auto-select it

## API/Interface

```typescript
// ProductSelect onChange
interface ProductSelection {
    name: string;
    referencia?: string;
}

// Hotspot creation (AdminPanel)
const newHotspot: Hotspot = {
    id: generateId("admin-"),
    pageId,
    productName: sel.name,
    productReferencia: sel.referencia,  // NEW: locked reference
    xPct: draftHotspot.xPct,
    yPct: draftHotspot.yPct,
    type: "product"
};

// Variant resolution (PageStage)
const variants = allProducts.filter(
    p => p.name === hotspot.productName
    && (!hotspot.productReferencia || p.referencia === hotspot.productReferencia)
);

// Size resolution (ProductPopover)
const sizeField = getSizeField(variants[0]);
const sizeOptions = [...new Set(variants.map(v => sizeField === "tamaño" ? v.tamaño : v.talla).filter(Boolean))];
```

## Data Model

```ts
// Existing Product type (no changes needed)
type Product = {
    id: string;
    name: string;
    referencia?: string;   // From CSV "Referencia" column
    color?: string;
    talla?: string;
    tamaño?: string;
    price?: number;
    currency?: string;
    // ...
};

// Updated Hotspot type
type Hotspot = {
    // ...existing fields
    productReferencia?: string;  // NEW: locked reference
};
```

## UI/UX Requirements

### Admin — ProductSelect Dropdown
```
┌─────────────────────────────────────────┐
│ Product Name     [Toalla Sublimada    ]  │
│ Referencia       [Safari              ]  │  ← NEW (replaces Size)
│                                         │
│ ℹ️ Customer will see "Safari"           │
│    and pick a size                      │
└─────────────────────────────────────────┘
```

### Non-Admin — ProductPopover
```
┌─────────────────────────────────────────┐
│ Toalla Sublimada - Safari               │
│                                         │
│ Size:  [130cm x 78cm ▾]                │  ← NEW: customer picks size
│                                         │
│ $ 65,000 COP                            │
│                                         │
│ [Add to Cart]                           │
└─────────────────────────────────────────┘
```

## Edge Cases

1. **Referencia doesn't match any variant:** Show error to admin, prevent save
2. **Product group has no references (unicolor products):** Referencia dropdown shows a single "Default" option
3. **"NO APLICA" talla:** Customer sees size dropdown with "NO APLICA" as the only option (or no dropdown if only one size)
4. **Legacy hotspots with only productId:** No `productReferencia` — behavior unchanged
5. **Referencia contains commas in CSV:** Already handled by `expandRawRow()` — each comma-separated value becomes its own Product with its own `referencia`
6. **Multiple hotspots on same page with different references:** Each hotspot independently shows its own reference
7. **Product with no size (only one variant):** Customer sees the variant directly, no size dropdown needed

## Testing Strategy

- **Unit tests:**
  - `ProductSelect` renders referencia dropdown with correct options (only from `referencia` field)
  - `ProductSelect` emits `referencia` in selection (no size)
  - `PageStage` filters variants by `productReferencia` correctly
  - `ProductPopover` shows size dropdown with correct options
- **Integration tests:**
  - Admin creates hotspot with referencia → saves → reloads → hotspot shows referencia in dropdown
  - Admin creates hotspot with referencia → non-admin clicks → ProductPopover shows only that reference
  - Non-admin selects size → correct variant is selected → price/image shown
  - Admin creates hotspot without referencia → non-admin clicks → behavior unchanged
- **E2E tests:**
  - Full flow: Upload CSV → Create hotspot with referencia → Save → View as customer → Pick size → Verify

## Rollout Plan

- [ ] Feature flag not needed (backward compatible — new field is optional)
- [ ] Deploy to staging, test with real CSV data
- [ ] Verify legacy hotspots still work
- [ ] Merge to main

## Assumptions

1. **Referencia source:** ONLY from the `referencia` field (CSV column "Referencia"), NOT from `color`
2. **Admin locks reference:** The admin selects ONE reference — the customer cannot switch to a different reference
3. **Customer picks size:** Size/tamaño selection is done by the non-admin user in the ProductPopover, NOT by the admin
4. **Comma-separated references:** The CSV `referencia` field may contain comma-separated values — these are split into individual options during CSV parsing
5. **No breaking changes:** The new `productReferencia` field is optional — existing hotspots without it work exactly as before
6. **Backward compat for productSize:** Existing hotspots with `productSize` continue to work; only new hotspots use the reference-first flow