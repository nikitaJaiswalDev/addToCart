import axios from 'axios';
const BASEURL = 'https://dummyjson.com/';

async function getAllProducts() { 
    try{
      var config = {
        method: 'GET',
        url: BASEURL+'products',
        data: null
      };
      return await axios(config)
      .then(async function (response) {
        return response.data
      })
      .catch(function (error) {
        return {error: error?.response?.data?.errors, status: error?.response?.status}
      });
    }catch(err) {
      console.log('error');
    }
}

export { getAllProducts}