import { defineField, defineType } from "sanity";

export default defineType({
  name: "video",
  title: "ویدیو",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "عنوان",
      type: "string",
      description: "این قسمت رو توی سایت نشون نمیده",
    }),
    defineField({
      name: "file",
      title: "فایل ویدیو",
      type: "cloudinary.asset",
      description: "This asset is served from Cloudinary",
    }),
    defineField({
      name: "poster",
      title: "پوستر",
      type: "cloudinary.asset",
      description: "This asset is served from Cloudinary",
    }),
  ],
});
