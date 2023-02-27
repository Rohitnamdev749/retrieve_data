import fetch from 'node-fetch';
export class Retrieve{
    static async getData(){
        const url = "https://jsonplaceholder.typicode.com/posts"
        return await fetch(url)
      .then(async response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
      })
      .catch(error => {
        console.error(`Error retrieving data from ${url}: ${error}`);
      });

    }
};

