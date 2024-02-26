import React from "react";
import "./Breadcrum.css";
import { FaArrowRight } from "react-icons/fa";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      MAIRAWUSA <FaArrowRight /> {product.category} <FaArrowRight />{" "}
      {product.name}
    </div>
  );
};

export default Breadcrum;
