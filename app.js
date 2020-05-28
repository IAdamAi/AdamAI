var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
//var data = require('./responses.json');

// Declare variables
var fs = require('fs'),
    obj

// Read the file and send to the callback
fs.readFile('./responses.json', handleFile)

// Write the callback function
function handleFile(err, data) {
    if (err) throw err
    obj = JSON.parse(data)
    // You can now play with your datas
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

//To ping heroku app to prevent from sleeping
setInterval(function() {
http.get(process.env.HerokuURL);
},1200000);

var router = express.Router();              // get an instance of the express Router

router.get('/', function(req, res) {
    res.json({ message: 'welcome to our ADAM AI api!' });
});

router.get('/:id', function(req, res) {
    res.send(obj);
});

app.use('/api', router);

app.listen(port);
console.log('Listening on port ' + port);
