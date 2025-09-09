import { useEffect } from "react";
import Aos from "aos";
const skill = ({ icons }) => {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);

  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="card" data-aos="zoom-in-up">
          <div className="card-body">
            <div className="icons">{icons}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default skill;
