/**
 * Created by maxime on 03/06/16.
 */
var express = require('express');
var api = express();

api.get('/', function (req, res, next) {
    res.send('Hello world')
});

api.get('/contacts', function (req, res, next) {
    res.send([])
});

console.log("Start on port 3000")
api.listen(3000);

module.exports = api;