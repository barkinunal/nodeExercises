//npm install request
const request = require('request');
request('https://jsonplaceholder.typicode.com/users/1', (error,response,body) => {
    // eval(require('locus'));
    if(!error && response.statusCode == 200 ) {
        var parsedData = JSON.parse(body);
        console.log(parsedData.name + " lives in " + parsedData.address.city);
    }
});