import React, { useState } from "react";
import AnimatedSteak from "../Components/AnimatedSteak";
import Burger from "../Components/Burger";
import Slider from "../Components/Slider";
import AnimatedBackground from "../Components/AnimatedBackground";

const Home = () => {
  const [credential, setCredential] = useState(1);

  const handleChange = (e) => {
    const { value } = e.currentTarget;
    setCredential(value);
  };

  return (
    <>
      <AnimatedBackground count={credential} />
      <AnimatedSteak count={credential} />
      <Burger steaks={credential} />
      <Slider credential={credential} onChange={handleChange} />
    </>
  );
};

export default Home;
