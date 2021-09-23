const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    userId: { type: String, required: true },
    text: { type: String, required: true },
    day: { type: String, required: true },
    reminder: {type: String, required: true},
})

module.exports = mongoose.model("Todo", todoSchema)