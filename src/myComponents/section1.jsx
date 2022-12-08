import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import "./section.css";

export const Section1 = (props) => {
  const [effectShowed, setEffectShowed] = useState(false);
  useEffect(() => {
    if (!effectShowed) {
      let section = document.querySelector(".section1Div");
      let arrElem = section.childNodes;
      gsap.fromTo(
        arrElem,
        { x: -500, opacity: 0 },
        {
          x: 0,
          duration: 2,
          opacity: 1,
          ease: "bounce.out",
          stagger: 1,
        }
      );
    }
    setEffectShowed(true);
  }, [props.isVisible, effectShowed]);
  return (
    <section className="section1Div" id={props.id}>
      <h3 className="section1H3">homemade recipies</h3>
      <h1 className="section1H1">Bakery and Confectionery</h1>
      <h4 className="section1H4">Image from Freepik</h4>
      <button className="section1Btn">Read more</button>
    </section>
  );
};
