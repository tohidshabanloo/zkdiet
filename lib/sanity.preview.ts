"use client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";
import { fromMutationPatches } from "sanity";

function onPublicAccessOnly() {
  throw new Error(`نمیتونیم محتوا را نمایش دهیم چوت شما وارد نشدید`);
}
if (!projectId || !dataset) {
  throw new Error(
    "آیدی پروژه یا دیتاست درست نیست. فایل سنیتی جیسون یا ای ان وی رو چک کنید"
  );
}
export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
