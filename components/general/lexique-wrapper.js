import LexiqueItem from "./lexique-item";
const LexiqueWrapper = () => {
  const articles = [
    {
      title: "Enduit hydraulique",
      content:
        "Un enduit de façade, qui protège un mur de type brut contre les intempéries ou pollution. C’est aussi un bon isolant qui a une grande résistance à l’humidité et sèche plus rapidement que les autres enduits. ",
    },
    {
      title: "Enduit organique",
      content:
        "C’est un enduit de façade aussi appelé Revêtement Plastique Épais, son principal atout est sa tenue dans le temps, il retarde la fissure du fait de son élasticité.",
    },
    {
      title: "Bardage",
      content:
        "désigne un type de revêtement appliqué sur une maison. Il peut se présenter sous différentes formes : panneaux, bois, aluminium, PVC. Le bardage permet d’améliorer l’isolation et protège la façade de votre logement.",
    },
    {
      title: "Chevrons",
      content: "des pièces en bois soutenant la toiture afin que le lattis ou la volige de couverture soit déposé.",
    },
    {
      title: "CEE",
      content:
        "Le certificat d’économie d'énergie permet de financer les travaux afin de réduire la consommation d'énergie. Cette prime est calculée en fonction des revenus du bénéficiaire.",
    },
    {
      title: "Comble",
      content:
        "L’espace situé sous la toiture, qui peut être aménageable ou isolé pour un maximum de confort thermique dans votre logement.",
    },
    {
      title: "Canalisation ",
      content: "Système de tuyauterie permettant de faire circuler des fluides, gaz ",
    },
    {
      title: "Vanne",
      content: "Permet de régler le débit du fluide présent dans un système de chauffage ou de climatisation",
    },
    {
      title: "Fondations",
      content:
        "La construction de la bâtisse dans le sol. Une étude du sol sera effectuée pour assurer la stabilité de la future construction. Cette étude nous donnera la profondeur à creuser dans le sol pour établir la fondation. Ainsi, La taille des fondations varie en fonction du sol. Lorsque la profondeur de la fondation est décidée, il faut choisir parmi les différents types de fondations dit semelle comme les semelles filantes utilisées pour la construction de maison individuelle.",
    },
    {
      title: "Semelle filante ",
      content: "la fondation la plus courante, qui se place au niveau des murs porteurs.",
    },
    {
      title: "Semelle isolée ",
      content: "Des fondations placées à des endroits précis de la structure, placées sous un poteau.",
    },
    {
      title: "Radier",
      content: "Permet d’établir une fondation superficielle, méthode courante pour les sols peu stables.",
    },
    {
      title: "Normes DTU",
      content:
        "Dit Document Technique Unifié, les normes à respecter dans le secteur du bâtiment afin de rendre à ouvrage de qualité. Peut aussi servir de référence pour les assurances en cas de dommage.",
    },
    {
      title: "Sablage ",
      content:
        "Technique de nettoyage d’une surface peut servir à décaper différents revêtements.  La sableuse projette des flux d’air à haute pression pour ramener la surface à son état d’origine.",
    },
    {
      title: "Zinguerie",
      content:
        "Activité permettant l’évacuation des eaux en plaçant des gouttières et d’assurer l'étanchéité de la toiture, les matériaux utilisés sont le zinc mais aussi l’acier, le cuivre.",
    },
    {
      title: "Ferraillage ",
      content:
        "Le ferraillage correspond à l’ensemble des éléments métalliques qui compose les fondations en béton armé. ",
    },
  ];

  function compare(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }

  articles.sort(compare);

  const result = articles.reduce((sorted, item) => {
    const firstLetter = item.title.substr(0, 1);
    if (sorted[firstLetter] == null) sorted[firstLetter] = [];
    sorted[firstLetter].push(item);
    return sorted;
  }, []);

  let mega = [];
  const showResults = () => {
    for (var index in result) {
      console.log(index);
      console.log(result[index]);
      //return index;
      mega.push({ letter: index, elements: result[index] });
    }
    console.log(mega);
  };

  showResults();
  return (
    <>
      {mega.map(element => {
        return (
          <div className="column">
            <h2>{element.letter}</h2>
            <LexiqueItem definitions={element.elements} />
          </div>
        );
      })}
    </>
  );
};

export default LexiqueWrapper;
