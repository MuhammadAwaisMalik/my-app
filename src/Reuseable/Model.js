import React, { useState } from "react";

import Btn from "./Btn";

const Model = ({
  refrence,
  Model_id,
  Model_Title,
  children,
  Success_btn_fun,
  Success_btnText,
  Danger_btn_fun,
}) => {
  return (
    <div>
      <div
        className="modal fade"
        ref={refrence}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        id={Model_id}
        tabIndex="-1"
        aria-labelledby="exampleModal"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="card-title">
                <h3 className="text-center">{Model_Title}</h3>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container my-1 p-2 d-flex justify-content-center align-items-center">
                <div className="w-100">
                  <div className="card-body">{children}</div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              {!Danger_btn_fun && (
                <Btn
                  type="button"
                  className="btn btn-secondary"
                  data_dismiss="modal"
                  btnText="Close"
                />
              )}
              {Danger_btn_fun && (
                <Btn
                  type="button"
                  className="btn btn-secondary"
                  click={() => {
                    Danger_btn_fun();
                  }}
                  btnText="Close"
                  data_dismiss="modal"
                />
              )}
              {Success_btnText && (
                <Btn
                  type="button"
                  className="btn btn-success mx-3"
                  click={() => {
                    Success_btn_fun();
                  }}
                  btnText={Success_btnText}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
