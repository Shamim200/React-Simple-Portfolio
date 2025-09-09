import { useEffect } from "react";
import Aos from "aos";

import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="container-fluid bg-custom p-5">
      <div className="container">
        <div className="row" data-aos="zoom-in-up">
          <div className="col-lg-3 col-md-6 col-12 foot">
            <h2>Shamim BD</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="col-lg-3 col-md-6 col-12 foot">
            <h3>Subscribe and never miss update.</h3>

            <form>
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                autoComplete="off"
              />

              <input
                type="submit"
                className="btn btn-outline-secondary my-lg-3 left"
              />
            </form>
          </div>
          <div className="col-lg-3 col-md-6 col-12 foot">
            <h3>Follow Me:</h3>
            <div className="social">
              <FaFacebookF className="social-icons" />

              <FaYoutube className="social-icons" />
              <FaLinkedinIn className="social-icons" />
              <FiInstagram className="social-icons" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 foot">
            <h3>Call Me</h3>
            <span>+91 12345678978</span>
          </div>
        </div>
      </div>

      <hr />
      <div className="container">
        <footer>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <p>&copy;Shamim2000. All Rights Reserved</p>
            </div>
            <div className="col-lg-6 col-md-6">
              <p>privacy policy terms & conditions</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
