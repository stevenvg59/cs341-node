const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/index');

app.get('/', lesson1Controller.sarahRoute);
app.get('/steven', lesson1Controller.stevenRoute);

const port = 3000;

app.listen(process.env.port || port);
console.log('Web Server is listening at port '+ (process.env.port || port));