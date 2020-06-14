// Express Server
// FIX ME :(
const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./router.js');
const port = 3000;

const server = express();

server.use('/', express.static(path.join(__dirname + '/../client/dist')));

// should send data to the router to correct path.
server.use('/', router);

// server.get('/name', (req, res) => {
//   res.status(200).send('This is your get request, modify this file to use your router!');
// });

// server.post('/name', (req, res) => {
//   res.status(200).send('This is your post request, modify this file to use your router!');
// });

// server.put('/name', (req, res) => {
//   res.status(200).send('This is your put request, modify this file to use your router!');
// });

// server.delete('/name', (req, res) => {
//   res.status(200).send('This is your delete request, modify this file to use your router!');
// });

server.listen(port, () => console.log('Connected to port: 3000'));