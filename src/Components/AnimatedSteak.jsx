import React, { useEffect, useState } from "react";
import steak from "../Assets/steak.png";
import "../Scss/AnimatedSteak.scss";

const AnimatedSteak = ({ count }) => {
  const [steaksArray, setSteaksArray] = useState([]);
  const [contentStyle, setContentStyle] = useState({ display: "none" });

  const initializeSteak = (count) => {
    const array = [];
    const animName = ["animatedSteakRight", "animatedSteakLeft"];
    for (let i = 0; i < 80; i++) {
      array.push({
        src: steak,
        style: {
          left: Math.random() * (100 - 0) + 0 + "%",
          animationDuration: Math.random() * (6 - 2) + 2 + "s",
          width: Math.random() * (100 - 10) + 10 + "px",
          animationDelay: Math.random() * (3 - 0.1) + 0.1 + "s",
          animationName: animName[Math.floor(Math.random() * animName.length)]
        }
      });
    }

    if (count > 20) {
      setContentStyle({ display: "block" });
    } else {
      setContentStyle({ display: "none" });
      setSteaksArray(array);
    }
  };

  useEffect(() => {
    initializeSteak(count);
  }, [count]);

  return (
    <>
      <div className="content-steaks-anim" style={contentStyle}>
        {steaksArray.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt=""
            style={item.style}
            className="steak-animated"
          />
        ))}
      </div>
    </>
  );
};

export default AnimatedSteak;
