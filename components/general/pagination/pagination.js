import { useState, useEffect } from "react";
import PaginationItem from "./paginationitem";

const Pagination = props => {
  //   const [actualPage, setActualPage] = useState(1);
  //const numberOfPages = [1, 2, 3, 4, 5, 6];

  const numberOfPages = props.numberOfPages;
  const iterations = Array.from({ length: numberOfPages }, (_, i) => i + 1);
  //console.log(numberOfPages);
  //console.log(iterations);

  const actualPage = props.actualPage;
  const setActualPage = props.setActualPage;

  return (
    <div className="pagination">
      <p>Page</p>
      <div className="row">
        {iterations.map(pageItem => {
          return (
            <PaginationItem key={pageItem} index={pageItem} actualPage={actualPage} setActualPage={setActualPage} />
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
