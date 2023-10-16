import Aos from "aos";
import { useEffect } from "react";

const Card = ({ cardImg, title }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card" data-aos="zoom-in-up">
          <img src={cardImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              culpa porro id magni facere. At, ad non ipsum laudantium nemo
              voluptates ratione nesciunt eveniet, fugit rem itaque qui
              doloribus ab veniam soluta earum, minima neque.
            </p>
            <button className="btn btn-outline-success">Click Me</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
