const express = require('express');
const app = express();
const path = require('path');
const WebSocket = require('ws');
const wss = new WebSocket.Server({port:8877});

app.use(express.static(path.join(__dirname, 'public')));

wss.on('connection', function(ws) {
  console.info('connection established');
});

app.listen(1234, function () {
  console.log('Listening on port 1234');
});


