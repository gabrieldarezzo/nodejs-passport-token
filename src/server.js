const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
require('dotenv').config(); 

const app = express();
require('./routes/users/auth')(passport);


app.use(express.json());
app.use(passport.initialize());

require('./routes/routes')(app, passport);

// process.env.DB_HOST

// destruct
const { MONGO_HOST, MONGO_DATABASE, MONGO_PORT, APP_PORT } = process.env;

mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`, {
    useMongoClient: true    
});

app.listen(APP_PORT, () => {
    console.log('Express start in port: http://localhost:' + APP_PORT);
});