import React, { useState } from 'react';

const ProductDetailsModal = ({ product, closeModal }) => {
  return (
    <div className='fixed z-10 inset-0 overflow-y-auto bg-gray-500 bg-opacity-10 flex items-center justify-center  p-48'>
      <div className='bg-white rounded-lg p-8  w-full mx-2  '>
        <div className=''>
          <a href='#'>
            <img className='rounded-t-lg h-52' src={product.image} alt='' />
          </a>
          <div className='p-5'>
            <h1> Title: {product.title} </h1>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Category: {product.category}
            </p>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Description: {product.description}
            </p>

            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Price: &#x20b9; {product.price}
            </p>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Rating: {product.rating.rate}⭐
            </p>
          </div>
        </div>

        <button
          className='mt-8 bg-gray-800 text-white py-2 px-4 rounded-lg'
          onClick={() => closeModal()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
