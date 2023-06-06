import React from "react";
import InputFeild from "../../Reuseable/InputFeild";
import Btn from "../../Reuseable/Btn";

const Edit = ({
  email,
  EmailErr,
  emailHandle,
  name,
  nameErr,
  nameHandle,
  phone,
  phoneErr,
  phoneHandle,
}) => {
  return (
    <>
      <form>
        <InputFeild
          type="email"
          className="form-control"
          id="email"
          label="Email Addres"
          value={email}
          placeholerd="Email address"
          change={emailHandle}
          Err={EmailErr}
        />

        <InputFeild
          type="text"
          className="form-control"
          id="name"
          label="Name"
          value={name}
          placeholerd="Name"
          change={nameHandle}
          Err={nameErr}
        />
        <InputFeild
          type="number"
          className="form-control"
          id="phone"
          value={phone}
          label="Phone"
          placeholerd="Phone"
          change={phoneHandle}
          Err={phoneErr}
        />
      </form>
    </>
  );
};

export default Edit;
