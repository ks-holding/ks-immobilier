import FilterChoice from "./filterChoice.js";
import SortChoice from "./sortChoice.js";

const FilterMenu = props => {
  ///// FILTER
  const clients = props.clients;
  const categories = props.categories;
  const categorySelected = props.categorySelected;
  const clientSelected = props.clientSelected;
  const setClientSelected = props.setClientSelected;
  const setCategorySelected = props.setCategorySelected;
  ///// SORT
  const sortBy = props.sortBy;
  const setSortBy = props.setSortBy;

  return (
    <div className="filter_menu column">
      <FilterChoice
        clients={clients}
        categories={categories}
        clientSelected={clientSelected}
        setClientSelected={setClientSelected}
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
      />
      <SortChoice sortBy={sortBy} setSortBy={setSortBy} />
    </div>
  );
};

export default FilterMenu;
