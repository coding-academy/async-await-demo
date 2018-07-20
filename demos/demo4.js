// Handle Errors in Asynchronous Functions

const fetch = require('node-fetch');

async function fetchFromGitHub(endpoint) {
    const url = `https://api.github.com${endpoint}`;
    const response = await fetch(url);
    const json = await response.json();

    if (response.status !== 200) throw Error(json.message);

    return json;
}

async function showGitHubUser(userName) {
    try {
        const user = await fetchFromGitHub(`/users/${userName}`);
        console.log(user.name);
        console.log(user.location);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

showGitHubUser('vyaron');
