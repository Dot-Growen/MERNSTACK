const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Author name is required"
        ],
        minlength: [3, "minimum length 3 character"]
    }
}, { timestamps: true });

module.exports.Author = mongoose.model('Author', AuthorSchema);