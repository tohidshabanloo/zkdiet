import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function CoverImage({ title, slug, image: source, priority }) {
  const image = source ? (
    <div
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    >
      <Image
        className="w-full h-full md:h-48 xl:h-48  object-cover"
        width={2000}
        height={1000}
        alt={`Cover Image for ${title}`}
        src={source}
      />
    </div>
  ) : (
    <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
