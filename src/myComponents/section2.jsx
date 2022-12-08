import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import "./section.css";

export const Section2 = (props) => {
  const [articleClass, setArticleClass] = useState("articleSection2");
  useEffect(() => {
    if (props.isVisible) {
      setArticleClass("articleSection2");
      let arrSection = document.querySelectorAll(".articleSection2");
      gsap.fromTo(
        arrSection,
        { opacity: 0, rotate: 180, x: -500 },
        {
          x: 0,
          rotate: 360,
          opacity: 1,
          ease: "bounce.out",
          stagger: 0.5,
          duration: 1.5,
        }
      );
    } else {
      setArticleClass("articleSection2 invisible");
    }
  }, [props.isVisible]);
  return (
    <section className="section2" id={props.id}>
      <h3 className="section2H3">what we do</h3>
      <h2 className="section2H2">Our produts</h2>
      <div className="containerSection2">
        <article className={articleClass}>
          <div className="roundDiv"></div>
          <h3 className="articleH3">Bread</h3>
          <p className="articleP">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </article>
        <article className={articleClass}>
          <div className="roundDiv"></div>
          <h3 className="articleH3">Bread</h3>
          <p className="articleP">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </article>
        <article className={articleClass}>
          <div className="roundDiv"></div>
          <h3 className="articleH3">Bread</h3>
          <p className="articleP">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </article>
        <article className={articleClass}>
          <div className="roundDiv"></div>
          <h3 className="articleH3">Bread</h3>
          <p className="articleP">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </article>
        <article className={articleClass}>
          <div className="roundDiv"></div>
          <h3 className="articleH3">Bread</h3>
          <p className="articleP">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </article>
        <article className={articleClass}>
          <div className="roundDiv"></div>
          <h3 className="articleH3">Bread</h3>
          <p className="articleP">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </article>
      </div>
    </section>
  );
};
