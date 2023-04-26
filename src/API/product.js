import { DELETE, GET, POST, PUT } from './config';

export const getProduct = () => GET('/products');

export const getSingleProduct = (id ) => GEt(`/products/${id}`)

export const updateProductData = (id, body) => {
  return PUT(`/products/${id}`, body);
};

export const deleteProductData = (id) => DELETE(`/products/${id}`);

export const getPoductByCat = (cat) => GET(`products/category/${cat}`);

export const getProductByOrder = (query) => GET(`/products?sort=${query}`);
