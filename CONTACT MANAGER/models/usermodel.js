const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
        trim: true,
        maxlength: [50, "Username can not be more than 50 characters"]
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        trim: true,
        maxlength: [50, "Email can not be more than 50 characters"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        trim: true,
        maxlength: [50, "Password can not be more than 50 characters"]
    },
},
    {
        timestamps: true
        }
);

module.exports = mongoose.model("User", userSchema);