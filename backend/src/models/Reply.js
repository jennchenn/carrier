const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    response: { type: String, required: true }
}, { timestamps: true });

const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;