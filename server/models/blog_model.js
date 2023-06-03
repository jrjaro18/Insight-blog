const mongoose = require('mongoose');
// Define the blog schema
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    tags:{
        type: Array,
    },
    authorid:{
        type: String,
        required: true,
    },
    authorname:{
        type: String,
        required: true,
    },
    likes:{
        type: Number,
        default: 0,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    comments:{
        type: Array,
        default: [],
    },
    blogPreview: {
        type: String,
        required: true,
    }
})
// Export the model
module.exports = mongoose.model('Blog', blogSchema);