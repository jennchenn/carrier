const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    groups:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    },
    displayName: { type: String }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;