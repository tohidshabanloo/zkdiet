import { defineField, defineType } from "sanity";

export default defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    defineField({
      name: "hedaer1",
      title: "Hedaer1",
      type: "string",
    }),
    defineField({
      name: "header2",
      title: "Header2",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
  ],
});
