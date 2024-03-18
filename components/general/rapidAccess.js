import NextService from "./NextService";

/**
 *
 * @param {prev: {url: "string", legend:"string" }, next{url: "string", legend:"string" }} props
 * @returns void
 */
const RapidAccess = props => {
  const prev = props.prev || { url: "/", legend: "accueil" };
  const next = props.next || { url: "/", legend: "accueil" };

  return (
    <div className="container accesrapide">
      <p className="text-center">Accès rapide</p>
      <div className="row wrap center">
        <NextService link={prev.url} legend={prev.legend} arrowDirection="left" />
        <NextService link={next.url} legend={next.legend} arrowDirection="right" />
      </div>
    </div>
  );
};

export default RapidAccess;
