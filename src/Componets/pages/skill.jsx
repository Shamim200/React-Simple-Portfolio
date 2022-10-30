import React from "react";

const skill = ({ icons }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="card">
          <div className="card-body">
            <div className="icons">{icons}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default skill;
