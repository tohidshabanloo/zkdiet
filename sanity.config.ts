import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { cloudinarySchemaPlugin } from "sanity-plugin-cloudinary";
import { myTheme } from "./theme";
import StudioNavbar from "./components/StudioNavbar";
import StudioLogo from "./components/StudioLogo";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "Sanity_Yoga",
  title: "سرور یوگا",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool(), cloudinarySchemaPlugin()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: StudioLogo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
