import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import "./section.css";

export const Section3 = (props) => {
  const [angle, setAngle] = useState(0);
  const [myTime, setMyTime] = useState(180);
  const [myHours, setMyHours] = useState(0);
  const [myMinutes, setMyMinutes] = useState(0);
  const [mySec, steMySec] = useState(0);

  const getXY = (grad) => {
    let radian = (grad * Math.PI) / 180;
    let x = Math.sin(radian) * 100;
    let y = 100 - Math.cos(radian) * 100;
    if (grad > 180) {
      return `0 0 ${x},${y}`;
    } else {
      return `1 0 ${x},${y}`;
    }
  };
  const getX = (grad) => {
    let radian = (grad * Math.PI) / 180;
    return Math.sin(radian) * 100;
  };
  const getY = (grad) => {
    let radian = (grad * Math.PI) / 180;
    return 100 - Math.cos(radian) * 100;
  };
  useEffect(() => {
    setTimeout(() => {
      if (angle == 360) {
        setAngle(6);
      } else {
        setAngle(angle + 6);
      }
      let newTime = Number(myTime) - 1;
      let min = parseInt(newTime / 60);
      let hour = parseInt(newTime / 3600);
      setMyMinutes(min > 10 ? min : `0${min}`);
      setMyHours(hour > 10 ? hour : `0${hour}`);
      steMySec(newTime % 60);
      setMyTime(newTime);
    }, 1000);
  }, [angle]);
  return (
    <section className="section3">
      <div className="clockDiv">
        <svg
          width="180"
          height="180"
          viewBox="-110 -10 220 220"
          filter="blur(1px)"
        >
          <path
            d={`M 0,0 A 100,100 0 ${getXY(angle)}`}
            fill-opacity="0"
            stroke="#b4fc0e"
            stroke-width="4"
          />
          <circle
            cx={getX(angle)}
            cy={getY(angle)}
            r="10"
            fill="#b4fc0e"
            opacity={0.8}
          />
        </svg>
        <span className="timeCounter">{`${myHours}:${myMinutes}:${mySec}`}</span>
      </div>
    </section>
  );
};
