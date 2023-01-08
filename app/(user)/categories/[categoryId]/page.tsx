import { groq } from "next-sanity";
import Banner from "../../../../components/Banner";
import Categories from "../../../../components/Categories";
import Post from "../../../../components/Post";
import { client } from "../../../../sanity";
import { Posts } from "../../../../typings";
import Alert from "../../../../components/alert";

type Props = {
  params: {
    categoryId: string;
  };
};
const bannerQuery = groq`
*[_type == "banner"]`;
const categoriesQuery = groq`
*[_type == "category"]`;
const postQuery = groq`
*[_type == "post" && $keyword in categories[]->slug.current] {
  ...,
  categories[]->{ 
    title,
   slug
  }, 
}`;

export const revalidate = 30; //Revalidate the page after 30sec

export const generateStaticParams = async () => {
  const postQuery = groq`
  *[_type == "post"]{
    slug
  }`;

  const postData = await client.fetch(postQuery);
  const slug = postData.map((item: any) => item.slug.current);

  return slug.map((item: any) => ({
    categoryId: item,
  }));
};

const CategoryId = async ({ params: { categoryId } }: Props) => {
  const bannerData: any = await client.fetch(bannerQuery);
  const postData: any = await client.fetch(postQuery, {
    keyword: categoryId,
  });
  const categoriesData: any = await client.fetch(categoriesQuery);

  return (
    <div>
      <Alert preview={undefined} />
      <div>
        <div className="m-4 border bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded-md font-medium text-gray-900 dark:text-gray-200 ">
          <Banner bannerData={bannerData[0]} />
        </div>
        <Categories categoriesData={categoriesData} />
      </div>
      <main>
        {postData.length === 1 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6 lg:gap-x-4 gap-y-4 md:gap-y-15 mb-15">
            {postData.map((item: Posts) => (
              <Post key={item._id} postData={item} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6 lg:gap-x-4 gap-y-4 md:gap-y-15 mb-15">
            {postData.map((item: Posts) => (
              <Post key={item._id} postData={item} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default CategoryId;
