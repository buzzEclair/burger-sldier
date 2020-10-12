import React from "react";

import "../Scss/Slider.scss";

const Slider = ({ credential, onChange }) => {
  return (
    <>
      <input
        type="range"
        id="range-steak"
        name="range-steak"
        min="1"
        max="80"
        value={credential}
        onChange={onChange}
      />
    </>
  );
};

export default Slider;
