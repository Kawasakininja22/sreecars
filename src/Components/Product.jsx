import React from 'react';
import { useParams } from 'react-router-dom';

export const Product = ({ collections, Collect }) => {
  const { id } = useParams();

  console.log("Product ID from URL:", id);

  // First search in collections
  let product = collections.find(item => item.id === id || item.id === parseInt(id, 10));

  // If not found, search in Collect
  if (!product) {
    product = Collect.find(item => item.id === id || item.id === parseInt(id, 10));
  }

  if (!product) {
    console.log("Product not found for ID:", id);
    return <div>Product not found</div>;
  }

  console.log("Found Product:", product);

  return (
    <>
      <div className="max-w-8xl mx-auto p-6">
        <div className="flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="lg:flex-1 p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">{product.brand}</h1>
            <p className="text-lg mb-2">Price: Rs {product.price}</p>
            <p className="text-base mb-4">Description: {product.description}</p>
          </div>
          <div className="lg:flex-1 p-2">
            {/* <video
              className="w-full h-72 lg:h-full object-cover rounded-lg"
              
              src={`../src/Asset/${product.img}`}
              title={product.brand}
            >
              Your browser does not support the video tag.
            </video> */}
            <img src= {`../src/assets/${product.img}`}alt="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        <img
          src={`../src/assets/${product.img1}`}
          alt={product.brand}
          className="w-full h-52 object-cover rounded-lg"
        />
        <img
          src={`../src/assets/${product.img2}`}
          alt={product.brand}
          className="w-full h-52 object-cover rounded-lg"
        />
        <img
          src={`../src/assets/${product.img3}`}
          alt={product.brand}
          className="w-full h-52 object-cover rounded-lg"
        />
        <img
          src={`../src/assets/${product.img4}`}
          alt={product.brand}
          className="w-full h-52 object-cover rounded-lg"
        />
        
      </div>
    </>
  );
};

export default Product;