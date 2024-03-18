const PaginationItem = props => {
  const { number, currentPage, setCurrentPage } = props;

  const changeCurrentNumber = () => {
    if (currentPage !== number) {
      setCurrentPage(number);
      sessionStorage.setItem("currentPage", number);
    }
  };

  return (
    <div className={currentPage === number ? "number selected" : "number"} onClick={() => changeCurrentNumber()}>
      {number}
    </div>
  );
};

export default PaginationItem;
