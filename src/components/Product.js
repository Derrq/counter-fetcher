import React from 'react'

function  Product({ product }) {
    return (
      <div className="border-2 border-gray-200 p-4 m-4 shadow-md rounded-md">
        <img className="mx-auto" src={product.image} alt={product.title} />
        <p className="text-lg font-medium">{product.title}</p>
        <p className="text-black">${product?.price?.toFixed(2)}</p>
      </div>
    );
  }

export default Product