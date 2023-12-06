import React from "react";
import { useDispatch } from "react-redux";
import { addWishlist } from "../../Redux/Features/productSlice";
import "./index.scss";
const ProductCard = ({ name, description, product }) => {
  const dispatch = useDispatch();

  return (
    <div className="">
      <div id="card">
        <div className="card_title">
          <h3>{name}</h3>
        </div>
        <div className="card_info">
          <p>{description}</p>
        </div>
        <div>
          <button
            className="btn btn-dark my-2"
            onClick={() => dispatch(addWishlist(product))}
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
