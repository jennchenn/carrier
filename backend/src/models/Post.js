const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true },
    name: { type: String, required: true },
    questions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
        }
    ]
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;