import React, { useState } from "react";
import Product_List from "./Product_List";

const Products_page = ({ get }) => {
  function badgecount(data) {
    get(data);
  }

  return (
    <div className="container">
      <Product_List badge={badgecount} />
    </div>
  );
};

export default Products_page;
