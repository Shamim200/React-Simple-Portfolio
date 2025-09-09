import { Container } from "react-bootstrap";
import Card from "../Componets/Card";
import Data from "../Componets/Data";

const Service = () => {
  return (
    <Container>
      <h2 className="text-center text-danger my-5">My Service</h2>
      <div className="row g-5 mb-5">
        {Data.map((val, index) => {
          return <Card key={index} title={val.title} cardImg={val.cardImg} />;
        })}
      </div>
    </Container>
  );
};

export default Service;
