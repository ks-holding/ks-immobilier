import { ChevronForwardOutline, ChevronBackOutline } from "react-ionicons";

import PaginationItem from "./PaginationItem";

const Pagination = props => {
  const { numberOfPages, currentPage, setCurrentPage } = props;

  const pages = Array.from({ length: numberOfPages }, (v, k) => k + 1);

  console.log(numberOfPages);
  //console.log(pages);

  const prevPage = () => {
    if (currentPage) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <h2>Pages</h2>
      <div className="row">
        {/* {currentPage > 1 && (
          <div className="prev" onClick={() => prevPage()}>
            {<ChevronBackOutline width="30px" height="30px" color="#2a3352" />}
          </div>
        )} */}

        {pages.map((page, key) => {
          return <PaginationItem key={key} number={page} currentPage={currentPage} setCurrentPage={setCurrentPage} />;
        })}
        {/* {currentPage < numberOfPages && (
          <div className="next">
            <ChevronForwardOutline onClick={() => nextPage()} width="30px" height="30px" color="#2a3352" />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Pagination;
