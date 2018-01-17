const fetch = require('node-fetch');

export const grabData = ( toIndex : any ) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (res : any) => toIndex(res) )
}