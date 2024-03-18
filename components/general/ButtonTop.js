import { ChevronUpOutline } from "react-ionicons";
import { colorMain } from "../../lib/variables";

export default function ButtonTop() {
  const go = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="returntothetop_btn"
      onClick={() => go()}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        zIndex: 100,
        position: "fixed",
        bottom: "50px",
        right: "50px",
        background: colorMain,
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
    >
      <ChevronUpOutline width="30px" height="30px" color={"white"} />
    </div>
  );
}
