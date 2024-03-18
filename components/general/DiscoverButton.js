import { ChevronDown } from "react-ionicons";

const DiscoverButton = () => {
  const handleScroll = () => {
    window.scrollTo(0, 500);
  };

  return (
    <button className="discover_btn grid-col-1-12" onClick={() => handleScroll()}>
      <ChevronDown />
      Découvrir
    </button>
  );
};

export default DiscoverButton;
