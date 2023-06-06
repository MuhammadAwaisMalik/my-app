import React, { useContext, useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import Card from "../Reuseable/Card";
import Btn from "../Reuseable/Btn";
import Model from "../Reuseable/Model";
import ProductForm from "./ProductForm";
// const { Modal } = bootstrap;
import { Modal } from "bootstrap";
import { CartContext } from "../context/Context";
import { useAuth } from "../context/AuthProvider";
import FetchData from "../Reuseable/FetchData";

const Pages = ({ badge }) => {
  const [isloading, setisloading] = useState(false);
  const [name, setProductName] = useState("");
  const [nameERR, setProductNameERR] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductPriceERR, setProductPriceERR] = useState("");
  const [ProductDes, setProductDes] = useState("");
  const [ProductDesERR, setProductDesERR] = useState("");
  const [product, setProduct] = useState();
  const productData = { name, ProductPrice, ProductDes };

  useEffect(() => {
    fetchData();
  }, []);
  // debugger;
  const modalRef = useRef();
  const GlobelState = useContext(CartContext);
  const dispatch = GlobelState.dispatch;
  const { isLogin, isAdmin } = useAuth();
  var a = true;
  function fetchData() {
    fetch("http://localhost:5000/products")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setisloading(true);
        setTimeout(() => {
          setProduct(resp);
          setisloading(false);
        }, 500);
      })
      .catch((err) => {
        console.log(err.msg);
      });
  }
  function closeModal() {
    setProductName("");
    setProductNameERR("");
    setProductDes("");
    setProductDesERR("");
    setProductPrice("");
    setProductPriceERR("");
  }
  function chk_Validation() {
    if (!name) {
      setProductNameERR("Product Name Is Required");
      a = false;
    }
    if (!ProductPrice) {
      setProductPriceERR("Price is Required");
      a = false;
    }
    if (!ProductDes) {
      setProductDesERR("Description is Required");
      a = false;
    }

    if (!name && !ProductPrice && !ProductDes) {
      return;
    }
  }

  function AddProduct() {
    chk_Validation();
    console.log(a);
    if (a === true) {
      FetchData("POST", "http://localhost:5000/products", productData)
        .then((res) => {
          console.log(res);
          fetchData();
          setProductName("");
          setProductPrice("");
          setProductDes("");
          hideModal();
        })
        .catch((err) => {
          console.log(err.msg);
        });
    }
  }

  function NameHandle(e) {
    setProductName(e.target.value);
    if (setProductName.length < 1) {
      setProductNameERR("Name Is required");
    } else {
      setProductNameERR("");
    }
  }
  function DescHandle(e) {
    setProductDes(e.target.value);
    if (setProductDes.length < 1) {
      setProductDesERR("Name Is required");
    } else {
      setProductDesERR("");
    }
  }
  function priceHandle(e) {
    setProductPrice(e.target.value);
    if (setProductPrice.length < 1) {
      setProductPriceERR("Name Is required");
    } else {
      setProductPriceERR("");
    }
  }

  const showModal = () => {
    const modalEle = modalRef.current;
    const bsModal = new Modal(modalEle, {
      backdrop: "static",
      keyboard: false,
    });
    bsModal.show();
  };

  const hideModal = () => {
    const modalEle = modalRef.current;
    const bsModal = Modal.getInstance(modalEle);
    bsModal.hide();
  };

  if (isLogin) {
    return (
      <>
        <div className="container mt-2">
          <div className="row">
            <div className="">
              {isAdmin && (
                <Btn
                  className="btn btn-primary mt-3 float-end"
                  btnText="Add Product +"
                  click={() => {
                    showModal();
                  }}
                />
              )}
            </div>
            {isloading && <Loader />}
            {product &&
              product.map(
                (item) => (
                  (item.quantity = 1),
                  (
                    <div className="col col-md-4 mt-3" key={item.id}>
                      <Card
                        card_id={item.id}
                        card_img={item.img}
                        card_title={item.name}
                        card_description={item.ProductDes}
                        card_price={item.ProductPrice}
                        card_btn_fun={() => {
                          dispatch({ type: "ADD", payload: item });
                        }}
                        Rating
                      />
                    </div>
                  )
                )
              )}
          </div>
        </div>
        <Model
          refrence={modalRef}
          Model_Title="Create Product Details"
          Success_btnText="Add Product"
          Danger_btn_fun={closeModal}
          Success_btn_fun={() => {
            AddProduct();
          }}
        >
          <ProductForm
            NameHandle={NameHandle}
            nameERR={nameERR}
            ProductName={name}
            ProductDesERR={ProductDesERR}
            DescHandle={DescHandle}
            ProductDes={ProductDes}
            priceHandle={priceHandle}
            ProductPriceERR={ProductPriceERR}
          />
        </Model>
      </>
    );
  }
  // if (isUser) {
  //   return (
  //     <div className="container">
  //       <div className="row">
  //         {isloading && <Loader />}
  //         {product &&
  //           product.map(
  //             (item) => (
  //               (item.quantity = 1),
  //               (
  //                 <div className="col col-md-4 mt-3" key={item.id}>
  //                   <Card
  //                     card_id={item.id}
  //                     card_img={item.img}
  //                     card_title={item.name}
  //                     card_description={item.ProductDes}
  //                     card_price={item.ProductPrice}
  //                     card_btn_fun={() => {
  //                       dispatch({ type: "ADD", payload: item });
  //                     }}
  //                     Rating
  //                   />
  //                 </div>
  //               )
  //             )
  //           )}
  //       </div>
  //     </div>
  //   );
  // }
  else {
    return (
      <div className="container">
        <div className="row">
          {isloading && <Loader />}
          {product &&
            product.map(
              (item) => (
                (item.quantity = 1),
                (
                  <div className="col col-md-4 mt-3" key={item.id}>
                    <Card
                      card_id={item.id}
                      card_img={item.img}
                      card_title={item.name}
                      card_description={item.ProductDes}
                      card_price={item.ProductPrice}
                      Rating
                    />
                  </div>
                )
              )
            )}
        </div>
      </div>
    );
  }
};

export default Pages;
