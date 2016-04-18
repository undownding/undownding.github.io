/**
 * Created by undownding on 2016/4/19.
 */
var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/dist'));

app.listen(3000);