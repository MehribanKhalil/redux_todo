import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

const Products = () => {
  const [data, setData] = useState([]);
  const getProducts = () =>
    fetch("https://northwind.vercel.app/api/categories")
      .then((res) => res.json())
      .then((data) => setData(data));

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className=" text-xl uppercase font-bold  text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data &&
          data.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              description={item.description}
              id={item.id}
              product={item}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
