import { PortableText } from '@portabletext/react'

import styles from './PostBody.module.css'

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
};

export default function PostBody({ content }) {
  return (
    <div className={`mx-auto max-w-2xl ${styles.portableText}`}>
      <PortableText value={content} components={ptComponents} />
    </div>
  )
}