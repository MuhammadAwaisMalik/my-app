import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/FetchContext";
import { useState } from "react";
import Card from "../Reuseable/Card";

const Com_2 = () => {
  const [product, setProduct] = useState();
  const { text, setText } = useContext(MyContext);
  useEffect(() => {
    if (text) {
      fetchData();
      console.log("Fetch");
    } else {
      console.log("Not Fetch");
    }
  }, [text]);
  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        console.log(json);
      });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          {product &&
            product.map((item) => (
              <div className="col col-md-4 mt-3" key={item.id}>
                <Card
                  card_img={item.image}
                  card_title={item.title}
                  card_description={item.description}
                  card_price={item.price}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Com_2;
