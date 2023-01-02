import { defineField, defineType } from "sanity";

export default defineType({
  name: "banner",
  title: "بنر",
  type: "document",
  fields: [
    defineField({
      name: "hedaer1",
      title: "بنر اول",
      type: "string",
    }),
    defineField({
      name: "header2",
      title: "بنر دوم",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "توضیحات",
      type: "string",
    }),
    defineField({
      name: "bannerImage",
      title: "عکس بنر",
      type: "cloudinary.asset",
      description: "This asset is served from Cloudinary",
      options: {
        hotspot: true,
      },
    }),
  ],
});
