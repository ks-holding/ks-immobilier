const PaginationItem = props => {
  const index = props.index;
  const actualPage = props.actualPage;
  const setActualPage = props.setActualPage;

  return (
    <div
      className={index === actualPage ? "item itemactive" : "item"}
      onClick={e => {
        setActualPage(index);
      }}
    >
      {index}
    </div>
  );
};

export default PaginationItem;
