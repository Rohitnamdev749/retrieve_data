import axios from "axios";
export class Retrieve{
    static async getData(){
        const url = "https://jsonplaceholder.typicode.com/posts"
        return await axios({
          method: 'get',
          url: url,
        })
      .then(async response => {
        console.log("response here man",response)
        if (!response.data) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response;
      })
      .catch(error => {
        console.error(`Error retrieving data from ${url}: ${error}`);
      });

    }
};

