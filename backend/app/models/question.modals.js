const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
        question:{
            type: String,
            required:true
        },
        options: {
            a: String,
            b:String,
            c:String
        },
        rightAnswer:{
            type: String,
            required:true
        }
    },
    {
        timestamps: true,
    }
);

module.exports = Question = mongoose.model('question', QuestionSchema);
