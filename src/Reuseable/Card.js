import React from "react";
import Btn from "./Btn";
import StarRating from "../components/Rating/StarRating";

const Card = ({
  card_id,
  card_img,
  Rating,
  card_title,
  card_description,
  card_price,
  card_btn_fun,
}) => {
  return (
    <>
      <div
        className="card shadow mb-5 bg-body rounded hover-zoom"
        key={card_id}
      >
        {card_img && <img src={card_img} style={{ height: "200px" }} />}
        {/* {!card_img && <img src={random} style={{ height: "200px" }} />} */}
        <div className="card-body">
          <h5 className="card-title">{card_title}</h5>
          <p className="card-text description-limit">{card_description}</p>
          <span className="text-success">
            <strong>${card_price || null}</strong>
          </span>
          {card_btn_fun && (
            <Btn
              className="btn btn-outline-primary d-block mt-3"
              type="button"
              btnText="Add to Cart"
              click={() => {
                card_btn_fun();
              }}
            />
          )}
          {!card_btn_fun && (
            <Btn
              className="btn btn-outline-primary d-block mt-3"
              type="button"
              btnText="Add to Cart"
            />
          )}
          {Rating && <StarRating />}
        </div>
      </div>
    </>
  );
};

export default Card;
