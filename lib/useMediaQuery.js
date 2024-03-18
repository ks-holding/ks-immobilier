import { useState, useEffect } from "react";

const useMediaQuery = query => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = `(max-width: ${query}px)`;

    const setMedia = () => {
      setMobile(window.matchMedia(mediaQuery).matches);
    };

    window.addEventListener("resize", setMedia);

    setMedia();
    return () => window.removeEventListener("resize", setMedia);
  }, [mobile, query]);

  return mobile;
};
export default useMediaQuery;
