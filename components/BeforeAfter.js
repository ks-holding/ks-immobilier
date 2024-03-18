import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { CodeOutline } from "react-ionicons";

export default function BeforeAfter({ beforeURL, afterURL, width = "100%", height = "500px" }) {
  const [containerX, setContainerX] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentPourcent, setCurrentPourcent] = useState(50);
  const [isPressed, setIsPressed] = useState(false);

  const containerRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    recalcul();
    window.addEventListener("resize", recalcul);
    return () => {
      window.removeEventListener("resize", recalcul);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("touchstart", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
  }, []);

  // useEffect(() => {
  //   console.log(isPressed);
  //   if (isPressed) {
  //     console.log(containerX)
  //     window.addEventListener("mousemove", handleMove);
  //   }
  // }, [isPressed]);

  const recalcul = () => {
    console.log(containerRef?.current?.getBoundingClientRect());
    setContainerX(containerRef?.current?.getBoundingClientRect().x);
    setContainerWidth(containerRef?.current?.getBoundingClientRect().width);
  };

  const handleMove = posX => {
    if (!isPressed) {
      return;
    }

    if (posX < containerWidth + containerX) setCurrentPourcent(0);
    if (posX > containerX + containerWidth) setCurrentPourcent(100);
    if (posX > containerX && posX < containerX + containerWidth) {
      setCurrentPourcent(((posX - containerX) / containerWidth) * 100);
    }
  };

  const handleMouseDown = e => {
    e.preventDefault();
    setIsPressed(true);
  };

  const handleMouseUp = e => {
    e.preventDefault();
    setIsPressed(false);
  };

  return (
    <div
      className="beforeafter-component"
      style={{ width: width, height: height }}
      ref={containerRef}
      onMouseMove={e => handleMove(e.clientX)}
      onTouchMove={e => handleMove(e.clientX)}
    >
      <div className="bar" ref={barRef} style={{ left: currentPourcent.toFixed(1) + "%" }}></div>
      <span className="thumb" style={{ left: currentPourcent.toFixed(1) + "%" }}>
        <CodeOutline width="30px" height="30px" color="white" />
      </span>
      {/* <input
        type="range"
        name=""
        id=""
        min={0}
        max={100}
        value={currentPourcent}
        onChange={e => setCurrentPourcent(e.target.value)}
      /> */}
      <figure className="before">
        <Image
          layout="fill"
          src={afterURL}
          objectFit="cover"
          placeholder="blur"
          blurDataURL="/assets/placeholder.png"
        />
      </figure>

      <figure
        className="after"
        style={{
          clipPath: `polygon(0 0, ${currentPourcent.toFixed(1)}% 0%, ${currentPourcent.toFixed(1)}% 100%, 0% 100%)`,
        }}
      >
        <Image
          layout="fill"
          src={beforeURL}
          objectFit="cover"
          placeholder="blur"
          blurDataURL="/assets/placeholder.png"
        />
      </figure>
    </div>
  );
}
