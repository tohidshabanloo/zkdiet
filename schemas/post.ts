import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "پست",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "عنوان",
      type: "string",
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
    defineField({
      name: "author",
      title: "نویسنده",
      type: "reference",
      to: { type: "author" },
    }),

    defineField({
      name: "mainImage",
      title: "کاور پست",
      type: "cloudinary.asset",
      description: "This asset is served from Cloudinary",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "categories",
      title: "دسته بندی ها",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "تاریخ انتشار",
      type: "datetime",
    }),
    defineField({
      name: "body",
      title: "محتوای پست",
      type: "blockContent",
    }),
    defineField({
      name: "description",
      title: "توضیحات پست",
      type: "string",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
