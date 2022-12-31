"use client";

import { usePreview } from "../lib/sanity.preview";
import Post from "./Post";

type Props = {
  query: string;
};

export default function PreviewPost({ query }: Props) {
  const postData = usePreview(null, query);

  return <Post postData={postData} />;
}
