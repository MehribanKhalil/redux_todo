import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
  const categories = useSelector((state) => state.categories.entity);
  const loading = useSelector((state) => state.categories.loading);
  const dispatch = useDispatch();

  const [newCategory, setNewCategory] = useState({
    name: "",
  });

  return;
  <div></div>;
};

export default Category;
