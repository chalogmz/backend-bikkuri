const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: { type: 'string', required: true, unique: true },
        email: { type: 'string', required: true, unique: true },
        password: { type: 'string', required: true },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamp: true }
);


module.exports = mongoose.model("User", UserSchema);