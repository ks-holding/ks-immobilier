import Link from "next/link";
import useMediaQuery from "./../../lib/useMediaQuery";

/**
 *
 * @param {array} links
 * @param {string} url
 * @param {string} legend
 * @returns
 */
const FilArianne = props => {
  const linkDefault = [{ url: "/services", legend: "Accueil" }];

  const links = props.links || linkDefault;

  //console.log(links);
  //console.log(links.length);
  const responsive = useMediaQuery(768);

  return (
    <div className="filarianne row grid-1-12">
      <div className="row">
        {links.map((link, index) => {
          //  console.log(index);
          return (
            <div key={index}>
              <div className="item">
                <Link href={link.url}>
                  <a className={index + 1 == links.length && "selected"} href={link.url}>
                    {link.legend}
                  </a>
                </Link>
              </div>
              {index + 1 !== links.length && <span>{">"}</span>}
              {index + 1 !== links.length && responsive && <hr />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilArianne;
