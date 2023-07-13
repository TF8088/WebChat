const express = require("express");
const path = require('path');
const app = express();

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// dotenv call requeried 
require('dotenv').config()

// app set pug engine
app.set('view engine', 'pug')

// app set views direct
app.set('views', [
  path.join(__dirname, './app/frontend'),
]);

// app set static route direct
app.use('/static', express.static(path.join(__dirname, './app/frontend/static')));

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// simple get route /
app.get("/", (req, res) => {
  res.render('home', { title: 'WebChat', message: 'Welcome to WebChat' })
});

// server start
server.listen(process.env.PORT, () => {
  console.log(`WebChat: http://localhost:` + process.env.PORT);
});