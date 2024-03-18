import Link from "next/link";
import { ArrowBackOutline, ArrowForwardOutline } from "react-ionicons";

const NextService = props => {
  const { link, legend } = props;
  const arrowDirection = props.arrowDirection || "right";

  // console.log(legend === "Services" || "Informations");

  return (
    <Link href={link}>
      <a href={link} className="nextservice column center">
        {legend}{" "}
        {legend === "Prestations" ||
        legend === "Informations" ||
        legend === "Liste des articles" ||
        legend === "Retour à la gallerie" ||
        arrowDirection === "left" ? (
          <ArrowBackOutline width={"32px"} height={"5"} color={"#FFFFF"} className="center" />
        ) : (
          <ArrowForwardOutline width={"32px"} height={"5"} color={"#FFFFF"} className="center" />
        )}
      </a>
    </Link>
  );
};

export default NextService;
