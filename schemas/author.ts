import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "نویسنده",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "نام",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "اسلاگ",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "image",
      title: "عکس",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
