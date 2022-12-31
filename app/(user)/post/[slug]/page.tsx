import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Banner from "../../../../components/Banner";
import { RichTextComponents } from "../../../../components/RichTextComponents";
import { client, urlFor } from "../../../../sanity";
import { Posts } from "../../../../typings";

type Props = {
  params: {
    slug: string;
  };
};
const bannerQuery = groq`
*[_type == "banner"]`;
const postQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ...,
  author->,
  categories[]->
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
    slug: item,
  }));
};

const Post = async ({ params: { slug } }: Props) => {
  const bannerData: any = await client.fetch(bannerQuery);
  const postData: Posts = await client.fetch(postQuery, { slug });

  return (
    <section>
      {/* Banner */}
      <div>
        <Banner bannerData={bannerData[0]} />
      </div>
      <main className="p-2 md:p-4">
        {/* Post Banner */}
        <div className="grid md:grid-cols-3 md:gap-x-10 gap-y-10 rounded-md shadow-lg bg-gradient-to-r from-[#FF928B] to-[#FFAC81] p-2 py-10 md:py-14 md:p-4 my-10">
          {/* Left */}
          <div className="space-y-6 col-span-2">
            <div className="">
              <h1 className="font-bold text-2xl mb-2">{postData.title}</h1>
              <span className="font-semibold text-gray-200">
                {new Date(postData._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <p className="line-clamp-1 text-sm text-white">
              {postData.description}
            </p>
          </div>
          {/* Rigth */}
          <div className="flex flex-col sm:justify-between sm:items-center sm:text-center space-y-2">
            <div className="flex items-center space-x-2">
              <img
                src={urlFor(postData.author.image).url()}
                className="w-12 h-12 rounded-full object-cover p-[1.5px] border-2 border-red-300"
                alt={postData.author.name}
              />
              <h2 className="font-semibold">{postData.author.name}</h2>
            </div>
            <div className="space-y-3">
              {postData.categories.map((item) => (
                <button className="btn py-1 px-2 mr-2 flex-wrap" key={item._id}>
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Rich Text Editor */}
        <div>
          <PortableText value={postData.body} components={RichTextComponents} />
        </div>
      </main>
    </section>
  );
};

export default Post;
