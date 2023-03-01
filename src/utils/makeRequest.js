/* eslint-disable */
import axios from 'axios';
const makeRequest = async ({ url, method }, data={}) => {
    console.log(url,method,data)
  try {
    const response = await axios({
      url,
      method,
      data,
    });
    return response.data;
  } catch (error) {
    
      return error;
    
  }
};
export default makeRequest;