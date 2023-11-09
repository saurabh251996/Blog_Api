const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index1.html');
});

io.on('connection', (socket) => {
    console.log('User connected');
  
    socket.on('like', (data) => {
      console.log('Like received:', data);
      // Handle like action
      io.emit('updateLikes', updatedLikeCount);
    });
  
    socket.on('dislike', (data) => {
      console.log('Dislike received:', data);
      // Handle dislike action
      io.emit('updateDislikes', updatedDislikeCount);
    });
  });
  

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});