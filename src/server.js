const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();
require('./routes/users/auth')(passport);


app.use(express.json());
app.use(passport.initialize());

require('./routes/routes')(app, passport);


mongoose.connect('mongodb://192.168.99.1:1111/passport-token', {
    useMongoClient: true    
});

app.listen(3333, () => {
    console.log('Express start in port: 3333');
});