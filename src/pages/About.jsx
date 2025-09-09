import { Container } from "react-bootstrap";
import Common from "../Componets/Common";

const About = () => {
  const data = {
    title: "About Me",
    sub: "",
    url: "/contact",
    btn: "Contact Me",
    imgs: "./img/about.svg",
  };
  return (
    <Container>
      <Common {...data} />
    </Container>
  );
};

export default About;
