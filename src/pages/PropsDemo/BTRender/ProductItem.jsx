import React from "react";

const ProductItem = (props) => {
  const { product } = props;

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <div className="card-body">
        <h3>
          {product.name} - ${product.price}
        </h3>
        <p>{product.shortDescription}</p>
        <button type="button" className="btn btn-dark">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
