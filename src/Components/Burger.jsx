import React, { useEffect, useState } from "react";
import upper from "../Assets/upper.png";
import under from "../Assets/under.png";
import steak from "../Assets/steak.png";
import "../Scss/Burger.scss";

const Burger = ({ steaks }) => {
  const [steakArray, setSteakArray] = useState([]);

  const countSteak = (steaks) => {
    const array = [];
    for (let i = 0; i < steaks; i++) {
      array.push(steak);
    }
    setSteakArray(array);
  };

  useEffect(() => {
    countSteak(steaks);
  }, [steaks]);

  return (
    <>
      <div className="burger">
        <div className="upper">
          <img src={upper} alt="" />
        </div>
        <div className="steak">
          {steakArray.map((steak, index) => (
            <img key={index} src={steak} alt="" />
          ))}
        </div>
        <div className="under">
          <img src={under} alt="" />
        </div>
      </div>
    </>
  );
};

export default Burger;
