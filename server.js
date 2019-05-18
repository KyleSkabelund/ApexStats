const http = require('http');
const express = require('express');
const https = require ('https');
const app = express();
const request = require('request');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
});

//app.use(express.static('public'));

app.get('/', function (req, res) {
    request({
        headers:{
            'TRN-Api-Key' : "5a1b389a-6581-4e1e-8f3d-d18f83025019"
        },
        uri: 'https://public-api.tracker.gg/v1/apex/standard/profile/psn/DaddyFlur', 
    }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(JSON.parse(body));
    });
});

app.listen(port, hostname, function() {
    console.log('Server running at http://'+ hostname + ':' + port + '/');
});