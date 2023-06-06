import React from "react";
import Btn from "../Reuseable/Btn";

const Userinfo = ({ employ, loadEdit, loadView, SetDelId }) => {
  return (
    <div>
      <table className="table table-bordered">
        <thead className="bg-dark text-white">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employ &&
            employ.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <Btn
                    className="btn btn-success"
                    data_toogle="modal"
                    data_target="#edit"
                    click={() => {
                      loadEdit(item);
                    }}
                    btnText="Edit"
                  />
                  <Btn
                    className="btn btn-danger mx-2"
                    data_toogle="modal"
                    data_target="#delete"
                    click={() => {
                      SetDelId(item.id);
                    }}
                    btnText="Delete"
                  />
                  <Btn
                    className="btn btn-light"
                    data_toogle="modal"
                    data_target="#view"
                    click={() => {
                      loadView(item);
                    }}
                    btnText="view"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userinfo;
