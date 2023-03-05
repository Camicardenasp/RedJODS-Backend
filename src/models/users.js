const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    password: String,
    is_admin: Boolean
});

module.exports = mongoose.model("users", UserSchema);
