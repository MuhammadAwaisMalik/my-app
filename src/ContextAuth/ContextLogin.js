import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import "../Auth/login.css";
import eye from "../img/eye.svg";
import eyeSlash from "../img/eye-slash.svg";
import Loader from "../components/Loader.js";
import InputFeild from "../Reuseable/InputFeild";
import Btn from "../Reuseable/Btn.js";
import { useAuth } from "../context/AuthProvider";

function ContextLogin() {
  const [Email, setEmail] = useState("");
  const [EmailErr, setEmailErr] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const [show, setShow] = useState(false);
  const [isloading, setisloading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("login");
  }, []);

  let a = true;
  const { setIsLogin, setAuthUser, setIsUser, setIsAdmin } = useAuth();

  const loginHandle = (e) => {
    e.preventDefault();
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
    }
    if (a === true) {
      if (Email === "admin@gmail.com" && password === "admin") {
        setIsAdmin(true);
        setIsLogin(true);
        console.log("Admin Login");
        setisloading(true);
        setAuthUser({
          Email,
          password,
        });
        navigate("/employ");
        setTimeout(() => {
          setisloading(false);
        }, 500);
      } else if (Email === "user@gmail.com" && password === "user") {
        setIsUser(true);
        setIsLogin(true);
        setisloading(true);
        console.log("user Login");
        setAuthUser({
          Email,
          password,
        });
        navigate("/product");
        setTimeout(() => {
          setisloading(false);
        }, 500);
      } else {
        alert("Enter Valid");
      }
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
    <div className="">
      {isloading && <Loader />}
      {!isloading && (
        <div className="pt-5 d-flex justify-content-center align-items-center">
          <div className="login shadow bg-body">
            <form>
              <h1 className="text-center  fs-1">Login Form</h1>
              <InputFeild
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                label="Email Address"
                change={EmailHandle}
                Err={EmailErr}
              />
              <div className="position-relative">
                <InputFeild
                  type={show ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  change={passwordHandle}
                  Err={passwordErr}
                  label="Password"
                />
                {!passwordErr && (
                  <img
                    src={show ? eyeSlash : eye}
                    height={15}
                    width={15}
                    onClick={handleShow}
                    className="icon"
                  />
                )}
              </div>

              <Btn
                className="btn btn-success d-block w-50 m-auto my-4"
                click={loginHandle}
                btnText="login"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default ContextLogin;
