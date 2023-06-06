import React, { useState } from "react";
import Btn from "../../Reuseable/Btn";
import Model from "../../Reuseable/Model";
import ProductForm from "../ProductForm";
import Card from "../../Reuseable/Card";

const Product_page = () => {
  const [name, setname] = useState("");
  const [des, setdes] = useState("");
  const [price, setprice] = useState("");
  const [img, setimg] = useState(null);
  const [items, setItems] = useState([]);

  function AddProduct() {
    let temArr = [
      ...items,
      {
        name,
        des,
        price,
        img,
      },
    ];
    setItems(temArr);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Btn
              className="btn btn-primary mt-3"
              btnText="Add Product +"
              data_toogle="modal"
              data_target="#AddProduct"
            />
          </div>
        </div>
        <div className="col-4">
          {items &&
            items.map((item) => {
              return (
                <Card
                  //   card_id={item.id}
                  // card_img={item.img}
                  card_title={item.name}
                  card_description={item.des}
                  card_price={item.price}
                  //   card_btn_fun={() => {
                  // counter(item);
                  //   }}
                  //   Rating
                />
              );
            })}
          {/* {data && (
            <Card
              //   card_id={item.id}
              card_img={data.img}
              card_title={data.name}
              card_description={data.des}
              card_price={data.price}
              //   card_btn_fun={() => {
              // counter(item);
              //   }}
              //   Rating
            />
          )} */}
        </div>
      </div>
      <Model
        Model_id="AddProduct"
        Model_Title="Create Product Details"
        Success_btnText="Add Product"
        Success_btn_fun={() => {
          AddProduct();
        }}
      >
        <ProductForm
          setProductName={setname}
          setProductDes={setdes}
          setProductPrice={setprice}
          setProduct_Img={setimg}
        />
      </Model>
    </>
  );
};

export default Product_page;
