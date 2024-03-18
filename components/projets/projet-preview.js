import Link from "next/link.js";
import Image from "next/image.js";
import { Eye, EyeOutline, SearchOutline } from "react-ionicons";
import BackLink from "../general/backlink";

export default function ProjetPreview(props) {
  const src = props.projet.thumbnail;
  const title = props.projet.title;
  const category = props.projet.category;
  const slug = props.projet.slug;
  const client = props.projet.client;

  //console.log(props);

  return (
    <div className="preview">
      <p className="category">{category}</p>
      <Link as={`/projet/${slug}`} href="/projet/[slug]">
        <a>
          <figure className="picture">
            <Image
              layout="fill"
              objectFit="cover"
              src={src}
              alt={title}
              
              placeholder="blur"
              blurDataURL="/assets/placeholder.png"
            />
            <div className="cache">
              <EyeOutline width="50px" height="50px" color={"#FFF"} />
            </div>
          </figure>
        </a>
      </Link>
      <h2>
        <Link as={`/projet/${slug}`} href="/projet/[slug]">
          <a>{title}</a>
        </Link>
      </h2>
      {/* <p className="client">{client}</p> */}
    </div>
  );
}
