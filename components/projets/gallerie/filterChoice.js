const FilterChoice = props => {
  const clients = props.clients;
  const categories = props.categories;
  const categorySelected = props.categorySelected;
  const clientSelected = props.clientSelected;
  const setClientSelected = props.setClientSelected;
  const setCategorySelected = props.setCategorySelected;
  return (
    <>
      {/* <div className=" clients wrapper row">
        <h5>Type de client</h5>
        {clients.map((client, key) => {
          return client === clientSelected ? (
            <span key={key} className="selected" onClick={() => setClientSelected(client)}>
              {client}
            </span>
          ) : (
            <span key={key} onClick={() => setClientSelected(client)}>
              {client}
            </span>
          );
        })}
      </div> */}

      <div className="wrapper row categories">
        <h5>Categorie</h5>
        {categories.map((category, key) => {
          return categorySelected === category ? (
            <span key={key} className="selected" onClick={() => setCategorySelected(category)}>
              {category}
            </span>
          ) : (
            <span key={key} onClick={() => setCategorySelected(category)}>
              {category}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default FilterChoice;
