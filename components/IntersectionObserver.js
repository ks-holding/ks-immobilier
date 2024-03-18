import { useState, useEffect } from "react";
import { useOnscreen } from "./../lib/useOnScreen";

const Fadein = ({ props, children }) => {
  const { container, elements } = props;
  const visible = useOnscreen({ rootMargin: "-230px" }, container);

  useEffect(() => {
    if (visible) {
      elements.forEach(element => {
        element.style.opacity = "1";
      });
    }
    if (!visible) {
      elements.forEach(element => {
        element.style.opacity = "0";
      });
    }
  }, [visible]);

  return <>{children}</>;
};

export default Fadein;
