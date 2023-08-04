import React from "react";
import Hero from "./hero/Hero";
import Commitment from "./commitment/Commitment";
import Quentity from "./quentity/Quentity";
import Branch from "./branch/Branch";

const About = () => {
  return (
    <div>
      <Hero />
      <Commitment />
      <Quentity/>
      <Branch/>
    </div>
  );
};

export default About;
