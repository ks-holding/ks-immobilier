import Link from "next/link";
import Image from "next/image";

export default function CoverImage({ title, src, slug, height, width }) {
  const image = (
    <Image
      className="coverimage"
      src={src}
      alt={`Cover Image for ${title}`}
      layout="responsive"
      width={width}
      height={height}
    />
  );
  return (
    <div>
      {slug ? (
        <Link as={`/articles/${slug}`} href="/articles/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
