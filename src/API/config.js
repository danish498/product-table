import axios from 'axios';

const fetchWrap = async ({ method, url, body }) => {
  // if it ask on PUT OR DELETE REQUEST

  const jwtToken = localStorage.getItem('jwtToken');
  const config = {
    baseURL: 'https://fakestoreapi.com',
    headers: {
      Authorization: !!jwtToken ? `Token ${jwtToken}` : '',
    },
  };
  try {
    const { data } =
      (method === 'get' && (await axios.get(url, config))) ||
      (method === 'post' && (await axios.post(url, body, config))) ||
      (method === 'put' && (await axios.put(url, body, config))) ||
      (method === 'delete' && (await axios.delete(url, config))) ||
      {};
    return data;
  } catch (e) {
    throw e;
  }
};

export const GET = (url) => fetchWrap({ method: 'get', url });

export const POST = (url, body) => fetchWrap({ method: 'post', url, body });

export const PUT = (url, body) => fetchWrap({ method: 'put', url, body });

export const DELETE = (url) => fetchWrap({ method: 'delete', url });
