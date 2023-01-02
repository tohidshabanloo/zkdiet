import { PortableText } from "@portabletext/react";

export default function PostBody({ content }) {
  const ptComponents = {
    types: {
      cloudinary: ({ value }) => {
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
            className="max-w-md mx-auto my-6 rounded-md text-center"
          />
        );
      },
    },
    block: {
      h2: ({ value }) => {
        if (!value?.children[0].text) {
          return null;
        }
        return <h2 className="py-6">{value?.children[0].text}</h2>;
      },
      h3: ({ value }) => {
        if (!value?.children[0].text) {
          return null;
        }
        return <h3 className="py-6">{value?.children[0].text}</h3>;
      },
      normal: ({ value }) => {
        if (!value?.children[0].text) {
          return null;
        }
        return <p className="leading-8">{value?.children[0].text}</p>;
      },
    },
  };

  return (
    <div className={`max-w-2xl mx-auto `}>
      <PortableText value={content} components={ptComponents} />
    </div>
  );
}
