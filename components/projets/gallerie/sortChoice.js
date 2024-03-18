import { ChevronDownOutline } from "react-ionicons";
import { ChevronUpOutline } from "react-ionicons";
import { useState, useEffect } from "react";

const SortChoice = props => {
  const sortBy = props.sortBy;
  const setSortBy = props.setSortBy;

  const [dateReverse, setDateReverse] = useState(false);
  const [nameReverse, setNameReverse] = useState(false);

  return (
    <>
      <hr className="hr2" />
      <div className="sortby row wrapper">
        <span
          className={sortBy === "datedesc" || sortBy === "dateasc" ? "selected" : null}
          onClick={() => {
            if (dateReverse) {
              setSortBy("dateasc");
              setDateReverse(!dateReverse);
            }
            if (!dateReverse) {
              setSortBy("datedesc");
              setDateReverse(!dateReverse);
            }
          }}
        >
          {dateReverse && (
            <ChevronDownOutline
              width="25px"
              color={sortBy === "datedesc" ? "#fffff" : "#00000"}
              className="sort_icon"
            />
          )}
          {!dateReverse && (
            <ChevronUpOutline width="25px" className="sort_icon" color={sortBy === "dateasc" ? "#fffff" : "#00000"} />
          )}
          Date
        </span>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <span
          className={sortBy === "namedesc" || sortBy === "nameasc" ? "selected" : null}
          onClick={() => {
            if (nameReverse) {
              setSortBy("nameasc");
              setNameReverse(!nameReverse);
            }
            if (!nameReverse) {
              setSortBy("namedesc");
              setNameReverse(!nameReverse);
            }
          }}
        >
          {nameReverse && (
            <ChevronDownOutline
              width="25px"
              color={sortBy === "namedesc" ? "#fffff" : "#00000"}
              className="sort_icon"
            />
          )}
          {!nameReverse && (
            <ChevronUpOutline width="25px" color={sortBy === "nameasc" ? "#fffff" : "#00000"} className="sort_icon" />
          )}
          Nom
        </span>
      </div>
    </>
  );
};

export default SortChoice;
