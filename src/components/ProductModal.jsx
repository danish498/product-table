import React, { useState } from 'react';

const ProductDetailsModal = ({ product, closeModal }) => {
  return (
    <div className='fixed z-10 inset-0 overflow-y-auto bg-gray-500 bg-opacity-10 flex items-center justify-center  p-48'>
      <div className='bg-white rounded-lg p-8  w-1/2 mx-2  '>
        <div className=''>
          <a href='#'>
            <img
              className='rounded-t-lg h-52 ml-28  '
              src={product.image}
              alt=''
            />
          </a>
          <div className='p-5'>
            <h1 className='mb-2 text-gray-700 '>
              <span className='font-semibold'>Title:</span> {product.title}
            </h1>

            <p className='mb-2 font-normal text-gray-700 dark:text-gray-400'>
              <span className='font-semibold'>Price:</span> &#x20b9;{' '}
              {product.price}
            </p>
            <div className='flex gap-10 mb-2'>
              <p className=' font-normal text-gray-700 dark:text-gray-400'>
                <span className='font-semibold'> Category:</span>{' '}
                {product.category}
              </p>
              <p className='font-normal text-gray-700 dark:text-gray-400'>
                <span className='font-semibold'> Rating:</span>{' '}
                {product.rating.rate}⭐
              </p>
            </div>
            <p className='mb-2 font-normal text-gray-700 dark:text-gray-400'>
              <span className='font-semibold'> Description:</span>{' '}
              {product.description}
            </p>
          </div>
        </div>

        <button
          className='mt-2 bg-gray-800 text-white py-2 px-4 rounded-lg ml-5'
          onClick={() => closeModal()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
