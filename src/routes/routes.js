module.exports = (app, passport) => {
    app.use('/', require('./main')(passport));
    app.use('/users', require('./users')(passport));
};
