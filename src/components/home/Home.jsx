import React from "react";
import Hero from "./hero/Hero";
import Collection from "./collection/Collection";
import Benefits from "./benefits/Benefits";
import Proccess from "./proccess/Proccess";

const Home = () => {
  return (
    <div>
      <Hero />
      <Collection />
      <Benefits />
      <Proccess />
    </div>
  );
};

export default Home;
