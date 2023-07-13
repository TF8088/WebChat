const express = require("express");
const path = require('path');
const app = express();

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
// simple get route /
app.get("/", (req, res) => {
  res.render('home', { title: 'WebChat', message: 'Welcome to WebChat' })
});
// server start
app.listen(process.env.PORT, () => {
    console.log(`WebChat: http://localhost:` + process.env.PORT);
});