import React from "react";
import InputFeild from "../../Reuseable/InputFeild";
import Btn from "../../Reuseable/Btn";

const View = ({ name, email, phone }) => {
  return (
    <>
      <form>
        <InputFeild
          type="text"
          className="form-control"
          id="name"
          label="Name"
          value={name}
          disabled="disabeld"
        />

        <InputFeild
          type="email"
          className="form-control"
          id="email"
          value={email}
          label="Email Address"
          disabled="disabeld"
        />

        <InputFeild
          type="number"
          className="form-control"
          id="phone"
          label="Phone"
          value={phone}
          disabled="disabeld"
        />
      </form>
    </>
  );
};

export default View;
