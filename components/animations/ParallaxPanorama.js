import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import useMediaQuery from "./../../lib/useMediaQuery";

/**
 * @param{Boolean} Visible
 * @param{Number} scrollTop
 * @return{HTMLElement}
 *
 */
export default function ParallaxPanorama({ children, direction }) {
  const mobile = useMediaQuery(768);
  const [scrollY, setScrollY] = useState(0);
  const [posY, setPosY] = useState(0);
  const [signe, setSigne] = useState(1);
  const [decallage, setDecallage] = useState(200);
  const [coeff, setCoeff] = useState(10);
  const containerRef = useRef(null);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (mobile) {
      setCoeff(50);
      setDecallage(100);
    } else {
      setCoeff(25);
      setDecallage(200);
    }
  }, [mobile]);

  useEffect(() => {
    console.log(containerRef.current);
    if (containerRef.current && containerRef.current !== null) {
      console.log(containerRef.current.scrollTop);
      console.log(window.scrollY);
      setPosY(containerRef.current.scrollTop);
    }
    if (direction === "normal") {
      setSigne(1);
    } else {
      setSigne(-1);
    }
  }, [containerRef]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      //   console.log("bounding" + containerRef.current.offsetTop);
      //   console.log("scroll Y" + window.scrollY);
    };
    if (inView) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView]);

  return (
    <div className="parallax_container" ref={containerRef}>
      <div
        className="parallax_picture"
        ref={ref}
        style={{ left: ` ${signe * parseInt((scrollY - posY) / coeff) - decallage}px` }}
      >
        {children}
      </div>
    </div>
  );
}
