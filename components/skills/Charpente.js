import React from "react";

export default function Charpente() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <g id="charpente">
        <path
          className="cls-1"
          d="M256,342.67H20.35a3.8,3.8,0,0,1-2.18-6.91l114-80.18L253.82,170a3.79,3.79,0,0,1,4.36,0l121.64,85.56,114,80.18a3.8,3.8,0,0,1-2.18,6.91Z"
        />
        <line className="cls-1" x1="256" y1="172.49" x2="256" y2="341.67" />
        <line className="cls-2" x1="372.24" y1="251.01" x2="372.24" y2="342.67" />
        <polyline className="cls-2" points="372.24 251.01 256 342.67 139.76 251.01" />
        <line className="cls-2" x1="372.24" y1="251.01" x2="139.76" y2="251.01" />
        <line className="cls-2" x1="139.76" y1="251.01" x2="139.76" y2="342.67" />
      </g>
    </svg>
  );
}
