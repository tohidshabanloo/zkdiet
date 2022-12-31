import { Reference, Slug } from "sanity";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export interface Banners extends Base {
  description: string;
  header2: string;
  hedaer1: string;
}
export interface Posts extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  title: string;
  slug: Slug;
  description: string;
}
export interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}
export interface Category extends Base {
  title: string;
  slug: Slug;
  description: string;
}

export interface Image {
  _type: "image";
  asset: Reference;
}
export interface Reference {
  _ref: string;
  _type: "reference";
}
export interface Slug {
  _type: "slug";
  current: string;
}
export interface Block {
  _key: "slug";
  _type: "block";
  children: Span[];
  markders: any[];
  style: "normal" | "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}
