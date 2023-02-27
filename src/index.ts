import fetch from 'node-fetch';
export class Retrieve{
    static getData(){
        const url = "https://jsonplaceholder.typicode.com/posts"
        fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error(`Error retrieving data from ${url}: ${error}`);
      });
    }
};

