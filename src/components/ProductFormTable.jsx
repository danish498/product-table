import React, { useEffect, useState } from 'react';
import Button from './common/Button';
import { toast } from 'react-toastify';
import { AiOutlineEye } from 'react-icons/ai';
import { RxUpdate } from 'react-icons/rx';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiSave } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import ProductDetailsModal from './ProductModal';
import {
  deleteProductData,
  getSingleProduct,
  updateProductData,
} from '@/API/product';

const ProductFormTable = ({ product }) => {
  const [editUserId, setEditUserId] = useState(null);
  const [productDetails, setProductDetails] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateProduct, setUpdateProduct] = useState({
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
  });

  const openModal = async (id) => {
    try {
      const data = await getSingleProduct(id);
      setProductDetails(data);
    } catch (error) {
      console.log(error);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdate = (id) => {
    setEditUserId(id);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdateProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = async (id) => {
    //todo this would be updage products

    setEditUserId(null);
    console.log(updateProduct);
    console.log(id);
    try {
      const data = await updateProductData(id, {
        body: {
          title: updateProduct.title,
          price: updateProduct.price,
          category: updateProduct.category,
          description: updateProduct.description,
        },
      });
      toast.success('Product Updated Successfully');
      console.log('Product Updated Successfully', data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const data = await deleteProductData(id);
      toast('Product deleted! ');
      console.log('Product deleted', data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {editUserId === product.id ? (
        <td className='px-4 py-2 border-r '>
          <input
            type='text'
            id='first_name'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={handleInputChange}
            name='title'
            value={updateProduct.title}
            required
          />
        </td>
      ) : (
        <td className='px-4 py-2 border-r '>{product.title}</td>
      )}

      {editUserId === product.id ? (
        <td className='px-4 py-2 border-r '>
          <input
            type='text'
            id='first_name'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={handleInputChange}
            value={updateProduct.price}
            name='price'
            required
          />
        </td>
      ) : (
        <td className='px-4 py-2 border-r '>{product.price}</td>
      )}
      {editUserId === product.id ? (
        <td className='px-4 py-2 border-r '>
          <input
            type='text'
            id='first_name'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={handleInputChange}
            value={updateProduct.description}
            name='description'
            required
          />
        </td>
      ) : (
        <td className='px-4 py-2 border-r '>{product.description}</td>
      )}
      {editUserId === product.id ? (
        <td className='px-4 py-2 border-r '>
          <input
            type='text'
            id='first_name'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={handleInputChange}
            value={updateProduct.category}
            name='category'
            required
          />
        </td>
      ) : (
        <td className='px-4 py-2 border-r '>{product.category}</td>
      )}

      <td className='px-4 py-2  '>
        {editUserId === product.id ? (
          <div className='flex  gap-2'>
            <Button onClick={() => handleSave(product.id)}>
              <FiSave />
            </Button>
            <Button onClick={() => setEditUserId(null)}>
              <RxCross2 />
            </Button>
          </div>
        ) : (
          <div className='flex  gap-2'>
            <Button onClick={() => openModal(product.id)}>
              <AiOutlineEye />
            </Button>
            {isModalOpen && (
              <ProductDetailsModal
                product={productDetails}
                closeModal={closeModal}
              />
            )}

            <Button onClick={() => handleUpdate(product.id)}>
              <RxUpdate />
            </Button>
            <Button onClick={() => deleteHandler(product.id)}>
              <AiOutlineDelete />
            </Button>
          </div>
        )}
      </td>
    </>
  );
};

export default ProductFormTable;
