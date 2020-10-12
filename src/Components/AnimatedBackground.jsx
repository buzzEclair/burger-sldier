import React, { useEffect, useState } from "react";
import "../Scss/AnimatedBackground.scss";

const AnimatedBackground = ({ count }) => {
  const [contentStyle, setContentStyle] = useState({ display: "none" });

  const initializeAnimation = (count) => {
    if (count > 20) {
      setContentStyle({ display: "block" });
    } else {
      setContentStyle({ display: "none" });
    }
  };

  useEffect(() => {
    initializeAnimation(count);
  }, [count]);

  return (
    <>
      <div className="content-background" style={contentStyle}></div>
    </>
  );
};

export default AnimatedBackground;
