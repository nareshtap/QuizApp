const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    question:{
        type: String,
    },
    text: {
        type: String,
    },
    selectedOption: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
}
);

module.exports = Answer = mongoose.model('answers', AnswerSchema);