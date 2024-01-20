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
import BannerSlider from "../../components/BannerSlider";
import HomeSlider from "../../components/HomeSlider";
import BmiCalculator from "../../components/BmiCalculator";
import Author from "../../components/Author";

const bannerQuery = groq`
*[_type == "banner"]`;
const authorQuery = groq`
*[_type == "authorBanner"]`;
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
  const authorData: any = await client.fetch(authorQuery);
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
    <>
      <div>
        <main>
          <div className="hidden sm:block">
            <Categories categoriesData={categoriesData} />
          </div>
          <Alert preview={undefined} />
          {/* <div className="">
            <BannerSlider bannerData={bannerData} />
          </div> */}
          <div className="m-4  bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded-md font-medium text-gray-900 dark:text-gray-200 ">
            <HomeSlider bannerData={bannerData} />
          </div>

          <div className="m-4 border bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded-md font-medium text-gray-900 dark:text-gray-200 ">
            <Banner bannerData={bannerData[2]} />
          </div>
          <p>{authorData[0].name}</p>
        </main>
        {/* Post */}
        <div className="mb-2 max-w-screen-lg gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto py-2 px-2">
          {postData.map((item: any) => (
            <Post key={item._id} postData={item} />
          ))}
        </div>
        <Author authorData={authorData} />
        <BmiCalculator />
      </div>
    </>
  );
};

export default HomePage;
