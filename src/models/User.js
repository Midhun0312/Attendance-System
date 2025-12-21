const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is Required'],
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: [6, 'password must be atleast 6 charecters'],
    },
    role: {
        type: String,
        required: true,
        enum: {
            values: ['teacher', 'student'],
            message: '{VALUE} is not a valid role',
        }
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;