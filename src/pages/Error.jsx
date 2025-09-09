import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-2 text-center p-5">
          <img src="../img/error.svg" className="w-50" alt="" />
        </div>
        <Link to="/" className="text-center">
          <button className="btn btn-outline-secondary my-5">Go Back</button>
        </Link>
      </div>
    </Container>
  );
};

export default Error;
