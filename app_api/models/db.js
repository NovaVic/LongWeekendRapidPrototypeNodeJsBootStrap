var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/MusicAsSecondAid';
mongoose.connect(dbURI);

var dbURIlog = 'mongodb://localhost/MusicAsSecondAidLog';

var logDB = mongoose.createConnection(dbURIlog);

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to '+ dbURI);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error '+ err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected.');
});

var gracefulShutdown = function (msg, callback) {
    mongoose.connection.close( function() {
        console.log('Disconnecting mongoose' + msg);
        callback();    
    });
}


process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon triggered graceful shutdown', function () {
        process.kill(process.pid, 'SIGUSR2');
    
    
    });
});



process.on('SIGINT', function () {
    gracefulShutdown('app triggered shutdown', function () {
        process.exit(0);
    });

});


process.on('SIGTERM', function () {
    gracefulShutdown('heroku initiated shutdown', function () {
      process.exit(0);
    }); 
});


logDB.on('connected', function() {
    console.log('mongoose connected to logDB ' + dbURIlog);
});



require('./user');