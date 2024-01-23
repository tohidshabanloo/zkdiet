import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "در مورد من",
  type: "document",
  fields: [
    defineField({
      name: "hedaer1",
      title: "بنر اول",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("پر کردن این قسمت اجباری است"),
    }),

    defineField({
      name: "description",
      title: "توضیحات",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("پر کردن این قسمت اجباری است"),
    }),
    defineField({
      name: "bannerImage",
      title: "عکس بنر",
      type: "cloudinary.asset",
      validation: (Rule) =>
        Rule.required().error("پر کردن این قسمت اجباری است"),
      description: "This asset is served from Cloudinary",
      options: {
        hotspot: true,
      },
    }),
  ],
});
