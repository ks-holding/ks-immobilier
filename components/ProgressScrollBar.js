import React, { useEffect, useState } from "react";
import { colorMain } from "./../lib/variables";

export default function ProgressScrollBar({ currentScroll }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent(Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100));
  }, [currentScroll]);

  return (
    <div
      id="progress-scroll-bar"
      style={{
        width: percent + "%",
        height: "6px",
        zIndex: "100",
        display: "flex",
        position: "fixed",
        transition: "all 0.2s ease",
        top: 0,
        left: 0,
        background: colorMain,
      }}
    />
  );
}
