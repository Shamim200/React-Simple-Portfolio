import { Container } from "react-bootstrap";
import Common from "../Componets/Common";
import Service from "./Service";

const Home = () => {
  const data = {
    title: "hello and welcome to my",
    sub: "creative porfolio",
    url: "/service",
    btn: "My Service",
    imgs: "./img/Home.jpg",
  };
  return (
    <Container>
      <Common {...data} />
      <Service />
    </Container>
  );
};

export default Home;
