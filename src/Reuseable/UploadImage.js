import React, { useState } from "react";
import InputFeild from "./InputFeild";
import profile from "../img/Profile-PNG-File.png";
const UploadImage = ({ className, getImage }) => {
  const [image, setImage] = useState("");
  function handlepic(event) {
    setImage(event.target.files[0]);
    getImage(event.target.files[0]);
  }
  return (
    <>
      <div className="d-flex justify-content-center">
        {!image && (
          <div className="position-relative">
            <img
              src={profile}
              name="image"
              className="card-img-top profile-img "
              id="profile-pic"
            />
            <label
              htmlFor="inp-feild"
              className="position-absolute top-0 start-0 h-100 w-100 "
            />
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center">
        {image && (
          <div className="position-relative">
            <img
              alt="not found"
              name="image"
              className="card-img-top profile-img "
              src={URL.createObjectURL(image)}
            />
            <label
              htmlFor="inp-feild"
              className="position-absolute top-0 start-0  h-100 w-100 "
            />
          </div>
        )}
      </div>
      <div className="card-body">
        <InputFeild
          type="file"
          className="d-none"
          change={handlepic}
          id="inp-feild"
          name="image"
        />
      </div>
    </>
  );
};

export default UploadImage;
