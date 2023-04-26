import React, { useEffect, useState } from 'react';
import ProductFormTable from './ProductFormTable';
import SearchProduct from './SearchProduct';
import DropDown from './DropDown';
import { getPoductByCat, getProduct, getProductByOrder } from '@/API/product';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await getProduct();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchValue(searchString);
  };

  const filterProduct = products.filter((product) => {
    return (
      product.title.toLocaleLowerCase().includes(searchValue) ||
      product.category.toLocaleLowerCase().includes(searchValue)
    );
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = async (option) => {
    setSelectedOption(option);
    toggleDropdown();

    try {
      const data = await getPoductByCat(option);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleSortDropdown = () => {
    setIsSortOpen(!isSortOpen);
  };

  const handleSortClick = async (sort) => {
    toggleSortDropdown();
    setSelectedSort(sort.toLocaleUpperCase());
    try {
      const data = await getProductByOrder(sort);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='w-full  p-10'>
      <div className='mb-3'>
        <SearchProduct
          onSearchChange={onSearchChange}
          toggleDropdown={toggleDropdown}
          isOpen={isOpen}
          handleOptionClick={handleOptionClick}
          selectedOption={selectedOption}
        />
      </div>
      <div className='mb-3'>
        <div className='flex items-center gap-9'>
          <DropDown
            toggleSortDropdown={toggleSortDropdown}
            isSortOpen={isSortOpen}
            handleSortClick={handleSortClick}
            selectedSort={selectedSort}
          />
          <h1 className='text-lg font-semibold'>
            Sort the Product accroding to the assending and descending order
          </h1>
        </div>
      </div>

      <table className='w-full border-collapse table-auto'>
        <thead>
          <tr className='bg-gray-200'>
            <th className='w-1/4 px-4 py-2 text-left border-r '>
              Product Title
            </th>
            <th className='w-1/5 px-4 py-2 text-left border-r '>
              Product Price
            </th>
            <th className='w-2/5 px-4 py-2 text-left border-r '>
              Product Description
            </th>
            <th className='w-1/5 px-4 py-2 text-left border-r '>
              Product Category
            </th>
            <th className='w-1/5 px-4 py-2 text-left border-r '>Action</th>
          </tr>
        </thead>
        <tbody>
          {filterProduct.map((product) => (
            <tr key={product.id} className='border-t border-gray-200'>
              <ProductFormTable product={product} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
