import React, { useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import Card from "../Reuseable/Card";
import Btn from "../Reuseable/Btn";
import Model from "../Reuseable/Model";
import ProductForm from "./ProductForm";
// const { Modal } = bootstrap;
import { Modal } from "bootstrap";

const Product_List = ({ badge }) => {
  const [isloading, setisloading] = useState(false);
  const [filteredList, setFilteredList] = useState();
  const [name, setProductName] = useState("");
  const [nameERR, setProductNameERR] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductPriceERR, setProductPriceERR] = useState("");
  const [ProductDes, setProductDes] = useState("");
  const [ProductDesERR, setProductDesERR] = useState("");
  const [ProductImg, setProductImg] = useState(null);
  const [CloseModel, setCloseModel] = useState(false);
  const [count, setcount] = useState(1);
  const [product, setProduct] = useState();
  const productData = { name, ProductPrice, ProductDes };
  var a = true;
  useEffect(() => {
    getLengthCartItem();
  });
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("http://localhost:5000/products")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setisloading(true);
        setTimeout(() => {
          setProduct(resp);
          setFilteredList(resp);
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
      fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(productData),
      })
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
      setCloseModel(false);
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
  const counter = (product) => {
    const min = 1;
    const max = 10000;
    const rand = min + Math.random() * (max - min);
    product.id = product.id + rand;

    fetch("http://localhost:5000/CartItem", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    }).then((resp) => {
      console.log(resp);
      getLengthCartItem();
    });
  };
  function getLengthCartItem() {
    fetch("http://localhost:5000/CartItem")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setcount(Object.keys(result).length);
        console.log(count, "fjh");
      });
    badge(count);
  }
  function Product_Img(data) {
    setProductImg(data);
    console.log(data, "porjsksajhd");
  }
  const modalRef = useRef();

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

  return (
    <>
      <div className="container mt-2">
        <div className="row">
          {isloading && <Loader />}
          {!isloading && (
            <div className="row mt-5">
              <div className="">
                <Btn
                  className="btn btn-primary mt-3"
                  btnText="Add Product +"
                  // data_toogle="modal"
                  // data_target="#AddProduct"
                  click={() => {
                    showModal();
                  }}
                />
              </div>
              {product &&
                product.map((item) => (
                  <div className="col col-md-4 mt-3" key={item.id}>
                    <Card
                      card_id={item.id}
                      card_img={ProductImg}
                      card_title={item.name}
                      card_description={item.ProductDes}
                      card_price={item.ProductPrice}
                      card_btn_fun={() => {
                        counter(item);
                      }}
                      Rating
                    />
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      <Model
        // CloseModel={CloseModel}
        // Model_id="AddProduct"
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
          ProductPrice={ProductPrice}
          setProduct_Img={Product_Img}
        />
      </Model>
    </>
  );
};

export default Product_List;
