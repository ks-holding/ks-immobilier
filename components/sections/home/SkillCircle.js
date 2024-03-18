import { useRef, useEffect } from "react";
import Image from "next/image";
import Electricite from "./../../skills/Electricite";
import Charpente from "./../../skills/Charpente";
import Isolation from "./../../skills/Isolation";
import Maconnerie from "./../../skills/Maconnerie";
import Peinture from "./../../skills/Peinture";
import Sol from "./../../skills/Sol";
import Zinc from "./../../skills/Zinc";
import Couverture from "./../../skills/Couverture";

const SkillsCircle = () => {
  const nbrCircles = 8;
  const radius = 50;

  const positionX = angle => {
    return radius - 14 + radius * Math.cos(angle) + "%";
  };
  const positionY = angle => {
    return radius - 13 + radius * Math.sin(angle) + "%";
  };
  const calculAngle = i => {
    return ((Math.PI * 2) / nbrCircles) * i;
  };

  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);
  const circle6 = useRef(null);
  const circle7 = useRef(null);
  const circle8 = useRef(null);
  ////
  console.log(circle1);
  console.log(circle2);
  console.log(circle3);
  console.log(circle4);
  console.log(circle5);
  console.log(circle6);

  useEffect(() => {
    if (circle1.current) {
      const angle1 = calculAngle(1);
      console.log(angle1);
      console.log(positionX(angle1));
      circle1.current.style.left = positionX(angle1);
      circle1.current.style.top = positionY(angle1);
    }

    if (circle2.current) {
      const angle2 = calculAngle(2);

      circle2.current.style.left = positionX(angle2);
      circle2.current.style.top = positionY(angle2);
    }
    if (circle3.current) {
      const angle3 = calculAngle(3);

      circle3.current.style.left = positionX(angle3);
      circle3.current.style.top = positionY(angle3);
    }
    if (circle4.current) {
      const angle4 = calculAngle(4);

      circle4.current.style.left = positionX(angle4);
      circle4.current.style.top = positionY(angle4);
    }
    if (circle5.current) {
      const angle5 = calculAngle(5);

      circle5.current.style.left = positionX(angle5);
      circle5.current.style.top = positionY(angle5);
    }
    if (circle6.current) {
      const angle6 = calculAngle(6);

      circle6.current.style.left = positionX(angle6);
      circle6.current.style.top = positionY(angle6);
    }
    if (circle7.current) {
      const angle7 = calculAngle(7);

      circle7.current.style.left = positionX(angle7);
      circle7.current.style.top = positionY(angle7);
    }
    if (circle8.current) {
      const angle8 = calculAngle(8);

      circle8.current.style.left = positionX(angle8);
      circle8.current.style.top = positionY(angle8);
    }
  }, []);

  return (
    <div id="skill-circle">
      <div className="circle" ref={circle1}>
        <Electricite />

        <p>Electricité</p>
      </div>
      <div className="circle" ref={circle2}>
        <Charpente />

        <p>Charpente</p>
      </div>
      <div className="circle" ref={circle3}>
        <Isolation />

        <p>Isolation</p>
      </div>
      <div className="circle" ref={circle4}>
        <Maconnerie />

        <p>Maçonnerie</p>
      </div>
      <div className="circle" ref={circle5}>
        <Peinture />

        <p>Peinture</p>
      </div>
      <div className="circle" ref={circle6}>
        <Sol />

        <p>Sol</p>
      </div>
      <div className="circle" ref={circle7}>
        <Zinc />
        <p>Zinc</p>
      </div>
      <div className="circle" ref={circle8}>
        <Couverture />

        <p>Couverture</p>
      </div>

      <figure className="logo">
        <Image
          layout="fixed"
          width="180px"
          height="180px"
          src="/assets/logo.svg"
          alt="logo KS Renov'"
          blurDataURL="/assets/placeholder.png"
          placeholder="blur"
        />
      </figure>
    </div>
  );
};

export default SkillsCircle;
