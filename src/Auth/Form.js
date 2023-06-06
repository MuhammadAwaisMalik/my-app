import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import eye from "../img/eye.svg";
import eyeSlash from "../img/eye-slash.svg";
import Loader from "../components/Loader";
import InputFeild from "../Reuseable/InputFeild";
import Btn from "../Reuseable/Btn.js";

function Form(props) {
  const [fName, setfName] = useState("");
  const [fNameErr, setfNameErr] = useState(false);
  const [lName, setlName] = useState("");
  const [lNameErr, setlNameErr] = useState(false);
  const [Email, setEmail] = useState("");
  const [EmailErr, setEmailErr] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const [Cpassword, setCPassword] = useState("");
  const [CpasswordErr, setCPasswordErr] = useState(false);
  const [DOB, setDOB] = useState("");
  const [DOBErr, setDOBErr] = useState(false);
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isloading, setisloading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("isLogin")) {
      navigate("/employ");
    }
    console.log("register Form");
  }, []);

  const loginHandle = (e) => {
    e.preventDefault();
    if (localStorage.getItem("isLogin") == true) {
      console.log("work");
    }
    console.log("hello world");
    let a = true;
    if (!fName) {
      setfNameErr("Enter First Name");
      a = false;
    }
    if (!lName) {
      setlNameErr("Enter Last Name");
      a = false;
    }
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
    if (!DOB) {
      setDOBErr("Pick up DOB");
      a = false;
    }
    if (!password) {
      setPasswordErr("Enter Password");
      a = false;
    }
    if (!Cpassword) {
      setCPasswordErr("Enter Confirm Password");
      a = false;
    }
    let p = document.getElementById("password").value;
    let ConfirmP = document.getElementById("ConfirmPassword").value;
    let msg = document.getElementById("msg");
    if (ConfirmP.length != 0) {
      if (p == ConfirmP) {
        msg.textContent = "";
      } else {
        msg.textContent = "Password Not Match";
        console.log("Not Match");
        a = false;
      }
    }
    const user = {
      fName: fName,
      lName: lName,
      Email: Email,
      DOB: DOB,
      password: password,
      Cpassword: Cpassword,
    };
    if (a === true) {
      setisloading(true);
      localStorage.setItem("email", Email);

      localStorage.setItem("password", password);

      localStorage.setItem("isLogin", true);
      props.Submit(user);
      navigate("/employ");
    }
  };

  function fNameHandle(e) {
    setfName(e.target.value);
    if (setfName.length <= 0) {
      setfNameErr("First Name Is Required");
    } else {
      setfNameErr("");
    }
  }
  function lNameHandle(e) {
    setlName(e.target.value);
    if (setlName.length < 1) {
      setlNameErr("Last Name Is Required");
    } else {
      setlNameErr("");
    }
  }
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
  function CpasswordHandle(e) {
    setCPassword(e.target.value);
    let CPassword = e.target.value;
    if (setCPassword.length < 1) {
      setCPasswordErr("Password Is Required");
    } else {
      setCPasswordErr("");
    }
    if (CPassword.length > 8) {
      setCPasswordErr("This is too long maximum 8");
      console.log("ll");
    } else {
      setCPasswordErr("");
    }
  }
  function handleDOB(e) {
    setDOB(e.target.value);
    if (setDOB.length < 1) {
      setDOBErr("DOB is Required");
    } else {
      setDOBErr("");
    }
  }
  function handleShowConfirm() {
    setShowConfirm(!showConfirm);
  }
  return (
    <div className="">
      {isloading && <Loader />}
      {!isloading && (
        <div className="container-fluid bg-light pb-0">
          <div className="row">
            <div className="col-lg-5 col-10 mt-lg-4 mx-lg-5 m-auto card border border-0 shadow p-3 my-5 bg-body rounded">
              <div className="container">
                <form>
                  <h1 className="text-center pt-3 fs-1">Register Form</h1>
                  <div className="row p-3 pt-5 d-flex justify-content-center align-item-center">
                    <div className="mb-2 col-md-6 col-12 form-group">
                      <InputFeild
                        type="text"
                        label="First Name"
                        className="form-control"
                        id="fName"
                        placeholder="First Name"
                        change={fNameHandle}
                      />
                      {fNameErr ? (
                        <span className="text-danger">{fNameErr}</span>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="mb-2 col-md-6 col-12 form-group">
                      <InputFeild
                        type="text"
                        className="form-control"
                        label="Last Name"
                        id="lName"
                        placeholder="Last Name"
                        change={lNameHandle}
                      />
                      {lNameErr ? (
                        <span className="text-danger">{lNameErr}</span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="mb-2 col-lg-6 col-12 form-group">
                      <InputFeild
                        type="email"
                        className="form-control"
                        label="Email address"
                        id="email"
                        placeholder="Email"
                        change={EmailHandle}
                      />
                      {EmailErr ? (
                        <span className="text-danger">{EmailErr}</span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="mb-2 col-lg-6 col-12 form-group">
                      <InputFeild
                        type="date"
                        label="DOB"
                        className="form-control"
                        id="dob"
                        change={handleDOB}
                      />
                      {DOBErr ? (
                        <span className="text-danger">{DOBErr}</span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="mb-2 col-md-6 col-12 form-group">
                      <div className="position-relative">
                        <InputFeild
                          type={show ? "text" : "password"}
                          className="form-control"
                          label="Password"
                          id="password"
                          placeholder="Password"
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
                      {passwordErr ? (
                        <span className="text-danger">{passwordErr}</span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="mb-2 col-md-6 col-12 form-group">
                      <div className="position-relative">
                        <InputFeild
                          type={showConfirm ? "text" : "password"}
                          className="form-control"
                          label="Confirm Password"
                          id="ConfirmPassword"
                          placeholder="Confirm Password"
                          change={CpasswordHandle}
                        />
                        <img
                          src={showConfirm ? eyeSlash : eye}
                          height={15}
                          width={15}
                          onClick={handleShowConfirm}
                          className="icon"
                        />
                      </div>
                      <span id="msg" className="text-danger"></span>
                      {CpasswordErr ? (
                        <span className="text-danger"> {CpasswordErr}</span>
                      ) : (
                        ""
                      )}
                    </div>

                    <Btn
                      className="btn btn-primary col-6 m-auto my-4"
                      click={loginHandle}
                      btnText="Register"
                    />
                    <br />
                    <br />
                    <label className="text-center">
                      Already account <Link to="/login">Login</Link>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Form;
