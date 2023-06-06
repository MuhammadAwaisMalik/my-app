import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { CartContext } from "../context/Context";
import { useAuth } from "../context/AuthProvider";

export default function Header({ badgeNo }) {
  const [isloading, setisloading] = useState(false);
  const navigate = useNavigate();
  const GlobelState = useContext(CartContext);
  const badge = GlobelState.state.length;
  const { isLogin, setIsAdmin, setIsUser, isUser, isAdmin } = useAuth();
  const logOut = () => {
    setIsAdmin(false);
    setIsUser(false);
    navigate("/");
  };
  if (isLogin) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              Company
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse d-flex justify-content-between"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {isAdmin && (
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/employ">
                      Employ Details
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/product">
                    Products
                  </Link>
                </li>
              </ul>
              <div className="d-flex justify-content-end position-relative p-2">
                <div className="">
                  <Link to="/product/CartItem">
                    <i className="fa fa-cart-plus fs-1 "></i>
                  </Link>
                  <span className="position-absolute mt-2 top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {badge}
                  </span>
                </div>
              </div>
              <div className="dropdown ms-4">
                <i
                  className="nav-link fa fa-user fs-3 rounded-pill card py-1 px-2"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></i>
                <ul
                  className="dropdown-menu text-center"
                  aria-labelledby="navbarDropdown"
                >
                  {isAdmin && (
                    <li>
                      <Link className="dropdown-item" to="/user-datails">
                        Edit Details
                      </Link>
                    </li>
                  )}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      type="submit"
                      onClick={logOut}
                      className="btn btn-danger mx-2"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {isloading && <Loader />}
      </div>
    );
  } else {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              Company
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-flex justify-content-between">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/product">
                    Products
                  </Link>
                </li>
              </ul>
              <div className="">
                <Link
                  type="submit"
                  to="/Register"
                  className="btn btn-primary mx-2"
                >
                  Register
                </Link>
                <Link type="submit" to="/" className="btn btn-success mx-2">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {isloading && <Loader />}
      </div>
    );
  }
}
