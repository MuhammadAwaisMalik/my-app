import React, { useState } from "react";
import InputFeild from "../Reuseable/InputFeild";
import UploadImage from "../Reuseable/UploadImage";

const ProductForm = ({
  NameHandle,
  ProductPriceERR,
  ProductDesERR,
  nameERR,
  DescHandle,
  priceHandle,
  setProduct_Img,
  ProductPrice,
  ProductName,
  ProductDes,
}) => {
  const [getImg, setgetImg] = useState(null);
  function getUploadImage(data) {
    setgetImg(data);
    setProduct_Img(data);
  }

  return (
    <div>
      <div className="">
        <UploadImage
          className="d-flex justify-content-center"
          getImage={getUploadImage}
        />
      </div>
      <form>
        <InputFeild
          type="text"
          className="form-control"
          id="name"
          value={ProductName}
          change={NameHandle}
          Err={nameERR}
          label="Product Name"
          placeholder="Enter Product Name"
        />
        <InputFeild
          type="text"
          className="form-control"
          id="des"
          Err={ProductDesERR}
          value={ProductDes}
          change={DescHandle}
          label="Product Description"
          placeholder="Enter Product Name"
        />
        <InputFeild
          type="number"
          className="form-control"
          Err={ProductPriceERR}
          id="number"
          change={priceHandle}
          value={ProductPrice}
          label="Product Price"
          placeholder="Enter Product Price"
        />
      </form>
    </div>
  );
};

export default ProductForm;
