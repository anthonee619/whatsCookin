const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const { Gamestate } = require('./gamestate.js');
const { addRoom } = require('./gamerooms.js');
const { addUser, removeUser, getUser, getUsersInRoom, allUsers } = require('./users.js');

const PORT = process.env.PORT || 5000;
const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('Server is now running');


  socket.on('joinGame', ({ name, room }, callback) => {
    console.log('New player has arrived');
    const { error, user } = addUser({ id: socket.id, name, room });
    let game = new Gamestate();
    const gameRoom = addRoom({ room, game });
    if (error) return callback(error);

    socket.join(user.room);
    console.log(allUsers());
  })

  socket.on('next', ({ room }, callback) => {
    console.log(`Next being called on ${room}`);
    const user = getUser(socket.id);
    io.to(user.room).emit('nextState', {})
    callback();
  })


  socket.on('disconnect', () => {
    removeUser(socket.id);
    console.log("User has been removed");
  })
})

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));