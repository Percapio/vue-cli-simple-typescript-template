const fetch = require('node-fetch');
export const grabData = (toIndex) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => toIndex(res));
};
//# sourceMappingURL=controllers.js.map