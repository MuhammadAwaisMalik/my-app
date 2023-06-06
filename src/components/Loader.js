import React from "react";
import loader from "../img/loader.gif";

export default function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img src={loader} alt="" style={{ width: "100px" }} />
    </div>
  );
}
