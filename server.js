const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongodb = require('./db/connect'); 

const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use('/', require('./routes'));

mongodb.initDb(() => {
    
        app.listen(process.env.port || port);
        console.log('Connected to DB and listening to port 8080');
    
});