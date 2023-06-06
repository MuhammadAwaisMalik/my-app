import React, { useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import Btn from "../Reuseable/Btn";
import Delete from "../crud/Models/Delete";
import { Link } from "react-router-dom";

const CartItems = ({ get }) => {
  const [isloading, setisloading] = useState(false);
  const [cartItem, setCartItem] = useState();
  // const [Total, setTotalPrice] = useState(TotalValue);
  const [TotalProducts, setTotalProducts] = useState("");
  const [DelId, setDelId] = useState();
  let TotalValue = 0;
  useEffect(() => {
    fetchCartItem();
  }, []);

  function fetchCartItem() {
    fetch("http://localhost:5000/CartItem")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setisloading(true);
        setTimeout(() => {
          setCartItem(resp);
          setTotalProducts(resp.length);
          get(resp.length);
          setisloading(false);
        }, 500);
      });
  }
  const DelCartitem = (id) => {
    fetch("http://localhost:5000/CartItem/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        fetchCartItem();
      })
      .catch((err) => {
        console.log(err.msg);
      });
  };
  return (
    <>
      <div className="container mt-5">
        {isloading && <Loader />}
        {!isloading && (
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <th className="w-25">Product Name</th>
                <th className="w-50">Product Des</th>
                <th className="w-25">Product Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItem &&
                cartItem.map((item) => {
                  TotalValue = Number(TotalValue) + Number(item.ProductPrice);
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.ProductDes}</td>
                      <td>
                        <strong id="price" className="text-success">
                          ${item.ProductPrice}
                        </strong>
                      </td>
                      <td>
                        <Btn
                          className="btn btn-danger mx-2"
                          data_toogle="modal"
                          data_target="#delete"
                          click={() => {
                            setDelId(item.id);
                          }}
                          btnText="Delete"
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
        <table className="table table-bordered">
          <thead>
            <tr>
              <td>Total Products : {TotalProducts}</td>
              <td className="text-success fw-bolder">
                Total Price : ${TotalValue}
              </td>
            </tr>
          </thead>
        </table>
        <div className="d-flex justify-content-between">
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
      <Delete
        del="delete"
        loadDel={() => {
          DelCartitem(DelId);
        }}
      />
    </>
  );
};

export default CartItems;
