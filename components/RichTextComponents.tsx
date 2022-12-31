import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../sanity";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-[20rem] h-[28rem] m-10 p-2 mx-auto shadow-2xl border-2">
          <Image
            src={urlFor(value).url()}
            className="object-contain "
            alt="Post logo"
            fill
          />
        </div>
      );
    },
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-10 list-decimal">{children}</ol>
    ),

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }: any) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },

  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: any) => (
      <h1 className="text-5xl font-bold py-10">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl font-bold py-10">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl font-bold py-10">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl font-bold py-10">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-purple-500 border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }: any) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },

  // Ex. 1: custom renderer for the em / italics decorator
  em: ({ children }: any) => (
    <em className="text-gray-600 font-semibold">{children}</em>
  ),

  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }: any) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }: any) => {
      const target = !(value?.href || "").startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value?.href}
          target={target}
          className="underline decoration-[#f3a34e] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
