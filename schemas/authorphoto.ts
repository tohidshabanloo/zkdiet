import { defineField, defineType } from "sanity";

export default defineType({
  name: "authorimage",
  title: "بنر",
  type: "document",
  fields: [
    defineField({
      name: "description",
      title: "توضیحات",
      type: "string",
    }),
    defineField({
      name: "authorImage",
      title: "عکس نویسنده",
      type: "cloudinary.asset",
      description: "This asset is served from Cloudinary",
      options: {
        hotspot: true,
      },
    }),
  ],
});
