var express = require('express');
var server = express();

server.get('/', (req, res) => {
    res.send('hi there');
});

server.listen('3003', () => {
    console.log('server started on port 3003');
});