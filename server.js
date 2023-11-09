const mongoose = require("mongoose");
const conf = require('./config');
const app = require("./app");
const express = require('express');
const http = require('http');

// const socketIo = require('socket.io');

const bodyParser = require('body-parser');
// const server = http.createServer(express);
// const io = socketIo(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//   console.log('A user connected');

//   socket.on('disconnect', () => {
//     console.log('A user disconnected');
//   });
// });

// server.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });
const port =3000
app.listen(port, () => {
  console.log(`Server running on : ${port} `);
});