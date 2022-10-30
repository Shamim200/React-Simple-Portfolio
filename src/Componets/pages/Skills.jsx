import React from "react";
import Sdata from "./Sdata";
import Skill from "./skill";
import { Container } from "react-bootstrap";
const Skills = () => {
  return (
    <Container>
      <h1 className="text-center text-danger text-capitalize py-4">
        My Skills
      </h1>
      <div className="row g-5 py-3">
        {Sdata.map((val, ind) => {
          return <Skill key={ind} icons={val.icons} />;
        })}
      </div>
    </Container>
  );
};

export default Skills;
