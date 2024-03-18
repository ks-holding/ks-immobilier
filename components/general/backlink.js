import { ChevronBackOutline } from "react-ionicons";
import Link from "next/link.js";

const BackLink = props => {
  const url = props.url;
  const legend = props.legend;
  return (
    <div className="returnbtn">
      <Link href={url}>
        <a>
          <ChevronBackOutline width="30px" height="30px" />
          <p className="legend">{legend}</p>
        </a>
      </Link>
    </div>
  );
};

export default BackLink;
