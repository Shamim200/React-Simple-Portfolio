import React from "react";

import { Link } from "react-router-dom";
const Common = ({ title, sub, url, btn, imgs }) => {
  return (
    <section>
      <div className="row d-flex justify-content-center align-items-center py-4">
        <div className="col-lg-6 col-md-12 my-md-3">
          <h2 className="text-danger heading text-capitalize">
            {title}
            <br />
            <span className="text-info">{sub}</span>
          </h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            recusandae, molestiae dolores beatae tenetur repudiandae officiis
            sint officia culpa ratione nesciunt. Architecto necessitatibus
            voluptatem nemo debitis numquam? Quia architecto praesentium
            quisquam, consequatur, magni, sapiente soluta minus neque quasi
            atque adipisci nulla? Quod cum perferendis quas dignissimos ratione,
            natus consectetur maxime.
          </p>
          <br />
          <Link to={url} className="btn btn-outline-success link">
            {btn}
          </Link>
        </div>
        <div className="col-lg-6 col-md-12 images">
          <img src={imgs} className="img-fluid w-100" alt="web site images" />
        </div>
      </div>
    </section>
  );
};

export default Common;
