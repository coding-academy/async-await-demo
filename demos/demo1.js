// An Async Function with async/await

const fetch = require('node-fetch');

function showGitHubUser(userName) {
    const url = `https://api.github.com/users/${userName}`;
    // TODO: use fetch and promisses
}

showGitHubUser('vyaron');












// async function showGitHubUser(userName) {
//     const url = `https://api.github.com/users/${userName}`;
//     const response = await fetch(url);
//     const user = await response.json();
//     console.log(user.name);
//     console.log(user.company);
//     console.log(user.location);
// }

