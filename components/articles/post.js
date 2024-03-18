import DateFormatter from "../general/date-formatter";
import Image from "next/image";
import Link from "next/link";

export default function MainPost({ title, coverImage, thumbnail, date, description, category, slug }) {
  return (
    <Link as={`/articles/${slug}`} href="/articles/[slug]">
      <article className="post">
        <figure href="">
          <Image
            alt={title}
            title={title}
            src={thumbnail}
            slug={slug}
            layout="fill"
            objectFit="cover"
            className="picture_container"
          />
        </figure>

        <div className="informations">
          <p className="category">{category}</p>
          <h2>
            <Link as={`/articles/${slug}`} href="/articles/[slug]">
              <a className="title">{title}</a>
            </Link>
          </h2>
          <DateFormatter dateString={date} className="date" />
          <p className="description">{description}</p>
        </div>
      </article>
    </Link>
  );
}
