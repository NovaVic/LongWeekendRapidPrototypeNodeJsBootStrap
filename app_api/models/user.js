var mongoose = require('mongoose');

//user schema
var userSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    about: String
});


//building the User model 
var User = mongoose.model('User', userSchema, 'Users');

//exporting 
exports = User;