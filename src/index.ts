import axios from "axios";
export class Retrieve{
    static async getData(){
        const url = "https://jsonplaceholder.typicode.com/posts"
        return await axios.get(url)
      .then(async response => {
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

