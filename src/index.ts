
// export class Retrieve{
//   static async getData(){
//       const axios = require('axios');
//       //   const url = "https://jsonplaceholder.typicode.com/posts"
//       //   return await axios({
//       //     method: 'get',
//       //     url: url,
//       //   })
//       // .then(async response => {
//       //   console.log("response here man",response)
//       //   if (!response.data) {
//       //     throw new Error(`HTTP error! Status: ${response.status}`);
//       //   }
//       //   return await response;
//       // })
//       // .catch(error => {
//       //   console.error(`Error retrieving data from ${url}: ${error}`);
//       // });

//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         return response.data;
//       } catch (error) {
//         return error;
//         console.error(error);
//       }

//     }
// };



module.exports = async function getContests() {
  const axios = require("axios"); // Importing the Axios module to make API requests
  var result;

  // const username; // Insert Your Username here
  // const api_key; //Insert API key here

  await axios // Making a GET request using axios and requesting information from the API
    .get(
    "https://jsonplaceholder.typicode.com/posts"
    )
    .then((response:any) => { // If the GET request is successful, this block is executed
      return response; // The response of the API call is passed on to the next block
    })
    .then((contests:any) => { // In this block, we store the response data into a variable 'result'
      result = contests.data;
    })
    .catch((err:any) => {
      console.log(err); // Error handler
    });
  return result; // The contest data is returned
};

