/*jshint strict:false*/
/*jshint unused:false*/
/*globals require*/

var express = require('express');
var _ = require('lodash');

var app = express();

var machineConfig = { 'I Am a' : 'Machine' };
var humanConfig = { 'I Am a' : 'Human', 'honest': true };

app.get('/', function(req, res) {
    var mergeResult = _.merge({}, machineConfig, humanConfig);
    res.json(mergeResult);
});

var server = app.listen(3000, function () {
    console.log('Listening on localhost:3000');
});
