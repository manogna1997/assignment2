/**
 * init express here
 */
var express = require('express');
const path = require('path');
var app = express();
const bodyParser = require('body-parser');

/**
 * use all static files
 */
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static('../'));
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

app.use("/dist", express.static("dist"));
app.use("/css", express.static("css"));
app.use("/static", express.static("static"));

/**
 * start serving at root /
 */
app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, '../public/index.html'));
});


/**
 * start server at port 3000
 */
app.listen(3000);