
// Call an Asynchronous Function in a Promise Chain

const fetch = require('node-fetch');

async function getGitHubUser(userName) {
    const url = `https://api.github.com/users/${userName}`;
    const response = await fetch(url);
    const user = await response.json();
    return user;
    // or just
    // return await response.json();
}

getGitHubUser('vyaron')
    .then(user => {
        console.log(user.name);
        console.log(user.location);
    });
