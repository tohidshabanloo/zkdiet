import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Banner from "../../../../components/Banner";
import { RichTextComponents } from "../../../../components/RichTextComponents";
import { client, urlFor } from "../../../../sanity";
import { Posts } from "../../../../typings";
import Image from "next/image";
import PostBody from "../../../../components/post-body";

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
const ptComponents = {
  types: {
    cloudinary: ({ value }: { value: any }) => {
      if (value?.asset?.url) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          title={value.alt || " "}
          loading="lazy"
          src={value?.url}
          width={600}
          height={240}
          className="mx-auto my-6 rounded-md text-center"
        />
      );
    },
  },
  block: {
    h2: ({ value }: { value: any }) => {
      if (!value?.children[0].text) {
        return null;
      }
      return <h2 className="py-6">{value?.children[0].text}</h2>;
    },
    h3: ({ value }: { value: any }) => {
      if (!value?.children[0].text) {
        return null;
      }
      return <h3 className="py-6">{value?.children[0].text}</h3>;
    },
    normal: ({ value }: { value: any }) => {
      if (!value?.children[0].text) {
        return null;
      }
      return <p className="leading-8">{value?.children[0].text}</p>;
    },
  },
};

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
    <section className="flex justify-center   ">
      {/* Banner */}
      {/* <div>
        <Banner bannerData={bannerData[0]}  />
      </div> */}
      <div className="p-2 md:p-4 ">
        {/* Post Banner */}
        <div className="md:gap-x-10 gap-y-10 rounded-md shadow-lg  p-2 py-10 md:py-14 md:p-4 my-10">
          {/* Left */}
          <div className="flex justify-center">
            <div className="">
              <h1 className=" text-center font-bold text-2xl mb-2">
                {postData.title}
              </h1>

              <span className="flex justify-center  font-semibold text-gray-200">
                {new Date(postData._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            {/* <p className="line-clamp-1 text-sm text-white">
              {postData.description}
            </p> */}
          </div>
          {/* Rigth */}
          <div className="flex justify-center sm:justify-center sm:items-center sm:text-center space-y-2">
            <div className="flex items-center space-x-2">
              <img
                src={urlFor(postData.author.image).url()}
                className=" w-12 h-12 rounded-full object-cover p-[1.5px] border-2 border-red-300"
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
        <div className=" w-full h-1/2 drop-shadow-lg">
          <Image
            src={postData.mainImage.url}
            className=""
            alt={postData.author.name}
            fill
          />
        </div>
        <div>
          {/* <PortableText value={postData.body} components={RichTextComponents} /> */}
          <PostBody content={postData.body} />
        </div>
      </div>
    </section>
  );
};

export default Post;
