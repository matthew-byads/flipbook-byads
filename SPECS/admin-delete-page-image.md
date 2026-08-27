# Spec: Admin Dashboard - Delete Page Image from S3

## User Story
As an **admin user**, I want to **delete page images from the Admin Dashboard > Pages tab**, so that **the images are permanently removed from S3 storage and no longer consume storage space or appear in the flipbook**.

## Problem Statement
Currently, when an admin clicks the delete button (trash icon) on a page in the Admin Dashboard > Pages tab:
1. The page is removed from the local UI state
2. On "Save Order", the page is removed from the `flipbook-pages.json` config in S3
3. **BUT the actual image file in S3 is NEVER deleted** — it remains in the bucket forever

This causes:
- Orphaned image files accumulating in S3 storage
- Wasted storage costs
- Potential confusion if images are re-uploaded with same names

## Acceptance Criteria
- [ ] **AC1**: When admin deletes a page that was uploaded to S3 (not a bundled static page), the image file is deleted from S3
- [ ] **AC2**: When admin deletes a bundled static page (from the build), only the config entry is removed — the bundled asset is NOT deleted (it's part of the build)
- [ ] **AC3**: Delete operation shows confirmation dialog before proceeding
- [ ] **AC4**: If S3 delete fails, show error to user and keep page in UI (don't remove from local state)
- [ ] **AC5**: On successful delete, remove page from local state immediately (optimistic UI) and mark config as dirty
- [ ] **AC6**: "Save Order" still works correctly after delete (saves updated config to S3)

## Technical Requirements
- Add `deletePageImage(key: string): Promise<boolean>` function in `src/components/Admin/hotspotIO.ts`
- Modify `deletePage(id: string)` in `src/components/Admin/BulkImageManager.tsx` to call S3 delete for uploaded pages
- Determine if a page is "uploaded" (S3 URL) vs "bundled" (imported asset URL)
- Use existing AWS credentials from `S3_CONFIG` (already supports both permanent and temporary STS credentials)
- Handle errors gracefully with user feedback

## API/Interface
```typescript
// In hotspotIO.ts
export async function deletePageImage(s3Key: string): Promise<boolean>;

// In BulkImageManager.tsx - modified deletePage
const deletePage = async (id: string) => {
    // 1. Confirm with user
    // 2. Find page by id
    // 3. If page.src is an S3 URL, extract key and call deletePageImage
    // 4. On success: remove from local state, setIsDirty(true)
    // 5. On failure: show alert, keep in state
};
```

## Data Model
```typescript
// Page type (from src/data/pages.ts)
type Page = {
    id: string;
    src: string;  // Can be: bundled asset URL, S3 URL (https://bucket.s3.region.amazonaws.com/pages/...), or blob: URL
    label?: string;
};

// S3 image URL pattern: https://flipbook-four-elements.s3.us-east-2.amazonaws.com/pages/{timestamp}-{filename}
```

## UI/UX Requirements
- Keep existing trash icon button and confirmation dialog
- Show loading state during S3 delete (disable button, show spinner)
- Show success/error toast/alert
- Don't change visual design — only behavior

## Edge Cases
1. **Bundled static pages**: IDs like "001", "002" — src is a webpack asset URL (e.g., `/assets/pages/CATÁLOGO-01.hash.png`). These should NOT attempt S3 delete.
2. **Uploaded pages**: IDs like `upload-{timestamp}-{index}` — src is an S3 URL. These SHOULD trigger S3 delete.
3. **Temporary blob: URLs**: Pages added but not yet saved — src starts with `blob:`. These don't exist in S3 yet, so no S3 delete needed.
4. **Network failure during S3 delete**: Keep page in UI, show error.
5. **Concurrent deletes**: If user rapidly clicks delete on multiple pages, handle each independently.

## Testing Strategy
- **Unit tests**: 
  - `deletePageImage` function with mock AWS client (success/failure cases)
  - `deletePage` logic: identify S3 vs bundled vs blob URLs correctly
- **Integration tests**:
  - Delete uploaded page → verify S3 DELETE request sent → verify page removed from UI
  - Delete bundled page → verify NO S3 DELETE request → verify page removed from UI
  - Delete blob: page → verify NO S3 DELETE request → verify page removed from UI
- **E2E tests**:
  - Full flow: Upload image → Save → Reload → Delete → Save → Reload → verify image gone from S3 and config

## Rollout Plan
- [ ] Feature flag not needed (bug fix)
- [ ] Deploy to staging, test with real S3 bucket
- [ ] Verify no regression in "Save Order" functionality
- [ ] Merge to main

## Assumptions
1. **S3 permissions**: The AWS credentials in `S3_CONFIG` have `s3:DeleteObject` permission on `flipbook-four-elements/pages/*`
2. **S3 key extraction**: Uploaded page URLs follow the pattern `https://{bucket}.s3.{region}.amazonaws.com/pages/{key}` — the key is everything after the bucket URL
3. **Bundled page identification**: Pages with IDs matching the static pages (`001`-`065`) are bundled; uploaded pages have `upload-` prefix
4. **No versioning**: S3 bucket doesn't have versioning enabled (delete is permanent)
5. **Single region**: All S3 operations use `us-east-2` as configured