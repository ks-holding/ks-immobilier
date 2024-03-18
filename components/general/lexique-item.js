const LexiqueItem = props => {
  const definitions = props.definitions;
  console.log(definitions);

  return (
    <ul className="letter">
      {definitions.map((definition, key) => {
        return (
          <li className="lexique_item" key={key}>
            <h3 className="title">{definition.title}</h3>
            <p className="description">{definition.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default LexiqueItem;
