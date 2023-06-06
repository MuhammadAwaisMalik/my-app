import React, { useContext } from "react";
import InputFeild from "../../Reuseable/InputFeild";
import { CartContext } from "../../context/Context";

const CheckOut = () => {
  const GlobelState = useContext(CartContext);
  const state = GlobelState.state;
  let TotalValue = 0;
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-7 card ">
            <form className="">
              <div className="row">
                <div className="col-12 bg-light text-center py-3 fs-2 card">
                  Basic Information
                </div>
                <div className="col-6 ">
                  <InputFeild
                    type="text"
                    className="form-control"
                    label="First Name"
                    id="fName"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-6">
                  <InputFeild
                    type="text"
                    className="form-control"
                    label="Last Name"
                    id="lName"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-6">
                  <InputFeild
                    type="email"
                    className="form-control"
                    label="Email"
                    id="Email"
                    placeholder="E-mail "
                  />
                </div>
                <div className="col-6">
                  <InputFeild
                    type="text"
                    className="form-control"
                    label="Phone No"
                    id="phone"
                    placeholder="Phone No"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="address">Address</label>
                  <textarea
                    className="form-control"
                    id="address"
                    placeholder="Address"
                  ></textarea>
                </div>
                <div className="col-4">
                  <InputFeild
                    type="text"
                    className="form-control"
                    label="City"
                    id="city"
                    placeholder="City"
                  />
                </div>
                <div className="col-4">
                  <InputFeild
                    type="text"
                    className="form-control"
                    label="State"
                    id="state"
                    placeholder="State"
                  />
                </div>
                <div className="col-4">
                  <InputFeild
                    type="text"
                    className="form-control"
                    label="Zip Code"
                    id="code"
                    placeholder="Zip Code"
                  />
                </div>
              </div>
              <div className="text-end  m-2">
                <button className="btn btn-primary">Place Order</button>
              </div>
            </form>
          </div>
          <div className="col-5">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td className="fw-bold">ID</td>
                  <td className="fw-bold">Product Name</td>
                  <td className="fw-bold">Product Price</td>
                  <td className="fw-bold">Quantity</td>
                  <td className="fw-bold">Total</td>
                </tr>
              </thead>
              <tbody>
                {state.map((item) => {
                  TotalValue =
                    Number(TotalValue) +
                    Number(item.ProductPrice) * item.quantity;
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>
                        <strong id="price" className="text-success">
                          ${item.ProductPrice}
                        </strong>
                      </td>
                      <td>{item.quantity}</td>
                      <td className="fw-bold">
                        {item.ProductPrice * item.quantity}
                      </td>
                    </tr>
                  );
                })}
                <tr className="fw-bolder">
                  <td colSpan="3" className="fs-4">
                    Grand Total :
                  </td>
                  <td colSpan="2" className="text-end text-success fs-4">
                    ${TotalValue}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
