import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Btn from "../Reuseable/Btn.js";
import Delete from "./Models/Delete";
import Model from "../Reuseable/Model";
import View from "./Models/View";
import Edit from "./Models/Edit";
import Create from "./Models/Create";
import Userinfo from "./Userinfo";
import FilterBySearch from "../Reuseable/FilterBySearch";
import FetchData from "../Reuseable/FetchData";
import { Modal } from "bootstrap";

export default function Post() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [EmailErr, setEmailErr] = useState(false);
  const [name, setname] = useState("");
  const [nameErr, setnameErr] = useState(false);
  const [phone, setphone] = useState("");
  const [phoneErr, setphoneErr] = useState(false);
  const [editId, seteditId] = useState("");
  const [isloading, setisloading] = useState(false);
  const [filteredList, setFilteredList] = useState();
  const [employ, setemploy] = useState();
  const [DelId, SetDelId] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  var a = true;
  const employData = { name, email, phone };
  function chk() {
    let Emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(Emailpattern)) {
      setEmailErr("");
    } else {
      setEmailErr("Invalid email");
      a = false;
    }
    if (!email) {
      setEmailErr("Enter Email");
      a = false;
    }

    if (!name) {
      setnameErr("Enter name");
      a = false;
    }
    if (!phone) {
      setphoneErr("Enter Phone");
      a = false;
    }
  }
  function fetchData() {
    FetchData("GET", "http://localhost:5000/emp")
      .then((resp) => {
        setisloading(true);
        setTimeout(() => {
          setemploy(resp);
          setFilteredList(resp);
          setisloading(false);
        }, 500);
      })
      .catch((err) => {
        console.log(err.msg);
      });
  }

  // ################# Create Data ######################
  function Add() {
    chk();
    if (a === true) {
      FetchData("POST", "http://localhost:5000/emp", employData)
        .then((res) => {
          fetchData();
          setEmail("");
          setphone("");
          setname("");
        })
        .catch((err) => {
          console.log(err.msg);
        });
    }
  }
  // ###################### Delete Data #######################
  const loadDel = (id) => {
    FetchData("DELETE", "http://localhost:5000/emp/" + id)
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.log(err.msg);
      });
  };
  // ################## Edit data ###################
  const loadEdit = (item) => {
    setname(item.name);
    setEmail(item.email);
    setphone(item.phone);
    seteditId(item.id);
    console.log(item.id);
  };

  function update(editId) {
    chk();
    if (a === true) {
      FetchData("PUT", "http://localhost:5000/emp/" + editId, employData)
        .then(() => {
          fetchData();
          // hideEditModal();
          setEmail("");
          setphone("");
          setname("");
        })
        .catch((err) => {
          console.log(err.msg);
        });
    }
  }
  const close = () => {
    setEmail("");
    setphone("");
    setname("");
  };
  // #################### view data #######################
  const loadView = (item) => {
    setEmail(item.email);
    setphone(item.phone);
    setname(item.name);
  };
  function emailHandle(e) {
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
  function nameHandle(e) {
    setname(e.target.value);
    if (setname.length < 1) {
      setnameErr("Name Is required");
    } else {
      setnameErr("");
    }
  }

  function phoneHandle(e) {
    setphone(e.target.value);
    let phone = e.target.value;
    if (setphone.length < 1) {
      setphoneErr("Phone Is required");
    } else {
      setphoneErr("");
    }
    if (phone.length > 11 || phone.length < 11) {
      setphoneErr("Invalid Phone");
    } else {
      setphoneErr("");
    }
  }

  return (
    <div>
      <div className="container my-5 text-center p-2">
        <div className="form-conrol w-25 mb-4 m-auto">
          <FilterBySearch data={setemploy} filteredList={filteredList} />
        </div>
        <div className="card">
          <div className="card-title">
            <h2 className="pt-3">Employ Details</h2>
          </div>
          <div className="card-body">
            <div className="mb-2">
              <Btn
                className="btn btn-success"
                data_toogle="modal"
                data_target="#create"
                btnText="Add New +"
              />
            </div>
            <div className="">{isloading && <Loader />}</div>
            {!isloading && (
              <Userinfo
                employ={employ}
                loadEdit={loadEdit}
                loadView={loadView}
                SetDelId={SetDelId}
              />
            )}
          </div>
        </div>
      </div>

      <Delete del="delete" loadDel={loadDel} DelId={DelId} />
      <Model
        Model_id="create"
        Model_Title="Create Employ Details"
        Danger_btn_fun={close}
        Success_btnText="Create"
        Success_btn_fun={Add}
      >
        <Create
          email={email}
          EmailErr={EmailErr}
          emailHandle={emailHandle}
          phone={phone}
          phoneErr={phoneErr}
          phoneHandle={phoneHandle}
          name={name}
          nameErr={nameErr}
          nameHandle={nameHandle}
        />
      </Model>
      <Model
        Model_id="edit"
        Model_Title="Edit Employ Details"
        Danger_btn_fun={close}
        Success_btn_fun={() => update(editId)}
        Success_btnText="Update"
      >
        <Edit
          // refrence={editModalRef}
          email={email}
          EmailErr={EmailErr}
          emailHandle={emailHandle}
          phone={phone}
          phoneErr={phoneErr}
          phoneHandle={phoneHandle}
          name={name}
          nameErr={nameErr}
          nameHandle={nameHandle}
        />
      </Model>
      <Model
        Model_id="view"
        Model_Title="Employ Details"
        Danger_btn_fun={close}
      >
        <View email={email} phone={phone} name={name} />
      </Model>
    </div>
  );
}
