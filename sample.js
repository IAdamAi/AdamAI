var request = require("request")

var url = "https://adamai-api.herokuapp.com/api/hi";

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body.hi); // Print the json response
    }
})
