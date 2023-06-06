import React from "react";
import Btn from "../../Reuseable/Btn";

const Delete = ({ del, loadDel, DelId, description }) => {
  return (
    <div>
      <div
        className="modal fade"
        id={del}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Delete User
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this {description}??
            </div>
            <div className="modal-footer">
              <Btn
                type="button"
                className="btn btn-secondary"
                data_dismiss="modal"
                btnText="Close"
              />
              <Btn
                click={() => {
                  loadDel(DelId);
                }}
                type="button"
                className="btn btn-danger"
                data_dismiss="modal"
                btnText="   Confirm Delete"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
