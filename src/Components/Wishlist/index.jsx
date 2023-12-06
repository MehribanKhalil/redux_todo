import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import WishlistCard from "../WishlistCard";
const Wishlist = () => {
  const products = useSelector((state) => state.products.value);
  return (
    <div id="wishlist" >
      <h1 className=" text-xl uppercase font-bold  text-center ">Wishlist</h1>

      <div className="container py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products &&
          products.map((item) => (
            <>
             <WishlistCard
              key={item.id}
              name={item.name}
              description={item.description}
              product={item}
            />
            </>
           
          ))}
      </div>
    </div>
  );
};

export default Wishlist;
