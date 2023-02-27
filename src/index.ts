
export class Retrieve{
  static async getData(){
      const axios = require('axios');
      //   const url = "https://jsonplaceholder.typicode.com/posts"
      //   return await axios({
      //     method: 'get',
      //     url: url,
      //   })
      // .then(async response => {
      //   console.log("response here man",response)
      //   if (!response.data) {
      //     throw new Error(`HTTP error! Status: ${response.status}`);
      //   }
      //   return await response;
      // })
      // .catch(error => {
      //   console.error(`Error retrieving data from ${url}: ${error}`);
      // });

      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
      } catch (error) {
        return error;
        console.error(error);
      }

    }
};

