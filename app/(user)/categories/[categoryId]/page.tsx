import { groq } from "next-sanity";
import Banner from "../../../../components/Banner";
import Categories from "../../../../components/Categories";
import Post from "../../../../components/Post";
import { client } from "../../../../sanity";
import { Posts } from "../../../../typings";

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
      {/* Banner */}
      <div>
        <Banner bannerData={bannerData[0]} />
        <Categories categoriesData={categoriesData} />
      </div>
      <main>
        {postData.length === 1 ? (
          <div className="mx-auto gap-10 gap-y-20 sm:w-[35rem] my-20 p-2 md:p-4">
            {postData.map((item: Posts) => (
              <Post key={item._id} postData={item} />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-10 gap-y-20 pl my-20 p-2 md:p-4">
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
