import { previewData } from "next/headers";
import { groq } from "next-sanity";
import React from "react";
import Banner from "../../components/Banner";
import Alert from "../../components/alert";
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

const HomePage = async () => {
  const bannerData: any = await client.fetch(bannerQuery);
  const postData: any = await client.fetch(postQuery);
  const categoriesData: any = await client.fetch(categoriesQuery);
 

  // Preview Mode
  if (previewData()) {
    return (
      <PreviewSuspense fallback="Loading Preview Mode Data...">
        <PreviewPost query={postQuery} />
      </PreviewSuspense>
    );
  }

  return (
    <div>
      <main>
        <Alert preview={undefined} />
        <div className="m-4 border bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded-md font-medium text-gray-900 dark:text-gray-200 ">
          <Banner bannerData={bannerData[0]} />
        </div>

        <Categories categoriesData={categoriesData} />
      </main>
      {/* Post */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6 lg:gap-x-4 gap-y-4 md:gap-y-15 mb-15">
        {postData.map((item: any) => (
          <Post key={item._id} postData={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
