var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

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

router.get('/hi', function(req, res) {
    res.json({ hi: 'Hello' });
});

app.use('/api', router);

app.listen(port);
console.log('Listening on port ' + port);
