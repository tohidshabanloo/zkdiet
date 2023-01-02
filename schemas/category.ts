import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "دسته بندی",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "عنوان",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "توضیحات",
      type: "text",
    }),
    defineField({
      name: "slug",
      title: "اسلاگ",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
  ],
});
