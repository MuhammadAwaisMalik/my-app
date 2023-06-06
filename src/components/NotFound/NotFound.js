import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <div className="wrapper d-flex justify-content-center align-items-center">
        <div className="area">
          <h1 className="text-center fs-1">
            4<span style={{ color: "#2596be" }}>0</span>4
          </h1>
          <div className="text-center">
            <label>THE PAGE YOU REQUESTED COULD NOT BE FOUND</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
