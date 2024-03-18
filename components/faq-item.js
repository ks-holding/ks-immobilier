import { useState, useEffect } from "react";
import { ChevronDownOutline } from "react-ionicons";

const FaqItem = props => {
  const [open, setOpen] = useState(false);

  const { description } = props;
  //console.log(props);
  return (
    <div className="faq-item">
      <div className="title" onClick={() => setOpen(!open)}>
        <ChevronDownOutline
          width="30px"
          height="30px"
          color={"#2a3352"}
          className={open ? "chevron_open chevron" : "chevron_closed chevron"}
        />
        {props.children}
      </div>
      {open && (
        <div className="description">
          {description.map(item => {
            return <p>{item}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
