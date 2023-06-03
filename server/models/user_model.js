const mongoose = require('mongoose');
// Define the User schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    
    password: {
        type: String,
        required: true
    },
    dob:{
        type:String,
        required:true
    }
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
