import React, { useContext } from "react";
import { CartContext } from "../context/Context";
import Btn from "../Reuseable/Btn";
import { Link } from "react-router-dom";
import Delete from "../crud/Models/Delete";

const Cart = () => {
  const GlobelState = useContext(CartContext);
  const state = GlobelState.state;
  const dispatch = GlobelState.dispatch;
  let TotalValue = 0;
  return (
    <div className="container my-5">
      <div className="card">
        <table className="table table-bordered">
          <thead className="bg-dark text-white">
            <tr>
              <th>ID</th>
              <th className="">Product Name</th>
              <th className="w-50">Product Des</th>
              <th className="">Product Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {state.map((item) => {
              TotalValue =
                Number(TotalValue) + Number(item.ProductPrice) * item.quantity;
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.ProductDes}</td>
                  <td>
                    <strong id="price" className="text-success">
                      ${item.ProductPrice * item.quantity}
                    </strong>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() =>
                        dispatch({ type: "INCREASE", payload: item })
                      }
                    >
                      +
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => {
                        if (item.quantity > 1) {
                          dispatch({ type: "DECREASE", payload: item });
                        } else {
                          dispatch({ type: "DELETE", payload: item });
                        }
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <Btn
                      className="btn btn-danger mx-2"
                      data_toogle="modal"
                      data_target="#delete"
                      btnText="Delete"
                    />
                    <Delete
                      del="delete"
                      description="Product"
                      loadDel={() => {
                        dispatch({ type: "DELETE", payload: item });
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {state.length > 0 && (
          <div className="fs-3 mx-auto  fw-bolder">
            Grand Total: <span className="text-success">${TotalValue}</span>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-between my-2">
        <div>
          <Link to="/product" className="btn btn-primary ">
            More Shop
          </Link>
        </div>
        <div>
          <Link to="/product/CartItem/Checkout" className="btn btn-success ">
            check Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
