const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.use(express.json());
require('./routes/routes')(app);


mongoose.connect('mongodb://192.168.99.1:1111/passport-token', {
    useMongoClient: true    
});

app.listen(3333, () => {
    console.log('Express start in port: 3333');
});