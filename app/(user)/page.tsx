import { previewData } from "next/headers";
import { groq } from "next-sanity";
import React from "react";
import Banner from "../../components/Banner";
import Post from "../../components/Post";
import { client } from "../../sanity";
import PreviewPost from "../../components/PreviewPost";
import PreviewSuspense from "../../components/PreviewSuspense";
import Categories from "../../components/Categories";

const bannerQuery = groq`
*[_type == "banner"]`;
const categoriesQuery = groq`
*[_type == "category"]`;
const postQuery = groq`
*[_type == "post"] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)`;

export const revalidate = 30; //Revalidate the page after 30sec

// Preview Mode

const HomePage = async () => {
  const bannerData: any = await client.fetch(bannerQuery);
  const postData: any = await client.fetch(postQuery);
  const categoriesData: any = await client.fetch(categoriesQuery);
  

  if (previewData()) {
    return (
      <PreviewSuspense fallback="Loading...">
        <PreviewPost query={postQuery} />
      </PreviewSuspense>
    );
  }

  return (
    <div>
      <main>
        <Banner bannerData={bannerData[0]} />
        <Categories categoriesData={categoriesData} />
      </main>
      {/* Post */}
      <div className="grid md:grid-cols-2 gap-10 gap-y-20 my-20 p-2 md:p-4">
        {postData.map((item: any) => (
          <Post key={item._id} postData={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
