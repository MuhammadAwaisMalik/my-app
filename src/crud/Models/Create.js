import React, { useEffect } from "react";
import InputFeild from "../../Reuseable/InputFeild";
import Btn from "../../Reuseable/Btn";

const Create = ({
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
    <div>
      <form>
        <InputFeild
          type="email"
          className="form-control"
          id="email"
          label="Email Addres"
          value={email}
          placeholder="Email address"
          change={emailHandle}
          Err={EmailErr}
        />

        <InputFeild
          type="text"
          className="form-control"
          id="name"
          label="Name"
          value={name}
          placeholder="Name"
          change={nameHandle}
          Err={nameErr}
        />
        <InputFeild
          type="number"
          className="form-control"
          id="phone"
          value={phone}
          label="Phone"
          placeholder="Phone"
          change={phoneHandle}
          Err={phoneErr}
        />
      </form>
    </div>
  );
};

export default Create;
