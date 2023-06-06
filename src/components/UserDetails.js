import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import eye from "../img/eye.svg";
import eyeSlash from "../img/eye-slash.svg";

import Loader from "./Loader";
import InputFeild from "../Reuseable/InputFeild";
import Btn from "../Reuseable/Btn.js";
import UploadImage from "../Reuseable/UploadImage";

function UserDetails() {
  const [Email, setEmail] = useState();
  const [EmailErr, setEmailErr] = useState(false);
  const [password, setPassword] = useState();
  const [passwordErr, setPasswordErr] = useState(false);
  const [show, setShow] = useState(false);
  const [isloading, setisloading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // setEmail(userData.Email);
    // setPassword(userData.password);
    setEmail(localStorage.getItem("email"));
    setPassword(localStorage.getItem("password"));
  }, []);

  const loginHandle = (e) => {
    e.preventDefault();
    console.log("hello world");
    let a = true;
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (Email.match(pattern)) {
      setEmailErr("");
    } else {
      setEmailErr("Invalid email");
      a = false;
    }
    if (!Email) {
      setEmailErr("Enter Email");
      a = false;
    }

    if (!password) {
      setPasswordErr("Enter Password");
      a = false;
    }

    if (a === true) {
      setisloading(true);
      localStorage.setItem("email", Email);
      localStorage.setItem("password", password);
      localStorage.setItem("isLogin", true);
      // const formData = new FormData();
      // formData.append("image", image);
      // console.log(image);
      // fetch("http://localhost:5000/empl", {
      //   method: "PUT",
      //   body: formData,
      // }).then((res) => {
      //   res.json().then((result) => {
      //     console.log("result", result);
      //   });
      // });
      // axios.put("http://localhost:5000/empl", formData).then((res) => {
      //   console.log(res);
      // });
      navigate("/user-details");
    }
  };

  function EmailHandle(e) {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    setEmail(e.target.value);
    let Email = e.target.value;
    if (Email.length < 1) {
      setEmailErr("Email required");
    } else {
      setEmailErr("");
    }
    if (Email.match(pattern)) {
      setEmailErr("");
    } else {
      setEmailErr("Invalid email");
    }
  }

  function passwordHandle(e) {
    setPassword(e.target.value);
    let Password = e.target.value;
    if (Password.length < 1) {
      setPasswordErr("Password Is required");
    } else {
      setPasswordErr("");
    }
    if (setPassword.length > 8) {
      setPasswordErr("This is too long maximum 8");
      console.log("ll");
    } else {
      setPasswordErr("");
    }
  }
  function handleShow() {
    setShow(!show);
  }

  return (
    <>
      {isloading && <Loader />}
      {!isloading && (
        <div className="container-fluid bg-white pb-0">
          <div className="m-auto card w-50 border border-0 shadow p-3 my-5 bg-body rounded">
            <div className="container ">
              <div className="row">
                <form className="col-8">
                  <InputFeild
                    className="form-control"
                    id="email"
                    value={Email}
                    label="Email"
                    change={EmailHandle}
                    Err={EmailErr}
                  />
                  <div className="position-relative">
                    <InputFeild
                      type={show ? "text" : "password"}
                      className="form-control"
                      id="password"
                      label="Password"
                      value={password}
                      Err={passwordErr}
                      change={passwordHandle}
                    />
                    <img
                      src={show ? eyeSlash : eye}
                      height={15}
                      width={15}
                      onClick={handleShow}
                      className="icon"
                    />
                  </div>
                  <Btn
                    type="submit"
                    className="btn btn-success col-6 m-auto my-4"
                    click={loginHandle}
                    btnText="Update"
                  />
                </form>
                <div className="col-4">
                  <UploadImage />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default UserDetails;
