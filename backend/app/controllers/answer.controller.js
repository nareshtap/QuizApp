const Answers = require("../models/answer.models");
const Question = require("../models/question.modals");

// Add New answer to DB
exports.addAnswer = async (req, res) => {
    try {
        const newAnswer = new Answers({
            question: req.body.question,
            text: req.body.text,
            selectedOption:req.body.selectedOption,
        });
        const answer = await newAnswer.save();
        res.send(answer);
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err);
    }
};

//To Add question To DB
exports.addQuestion = async (req, res) => {
    try {
        const newQuestion = new Question({
            question: req.body.question,
            options:{
                a:req.body.options.a,
                b:req.body.options.b,
                c:req.body.options.c
            },
            rightAnswer:req.body.rightAnswer
        });
        const answer = await newQuestion.save();
        res.send(answer);
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err);
    }
};
// To Get All Question from DB
exports.getQuestion = async (req, res) => {
    try {
        const ans = await Question.findOne()
        res.status(200).send({
            data: ans,
        });
    } catch (e) {
        console.log('Error', e)
        res.status(400).send(e);
    }
}
// To Get All Answers from DB

exports.getAllAnswers = async (req, res) => {
    try {
        const ans = await Answers.find().sort({ createdAt: -1 });
        res.status(200).send({
            success: true,
            data: ans,
        });
    } catch (e) {
        console.log('Error', e)
        res.status(400).send(e);
    }
}

// To Delete All DATA from Database

exports.deleteAll = async (req, res) => {
    try {
        await Answers.deleteMany();
        res.status(201).send({
            success: true,
            message: 'Database cleared Successfully...!',
        });
    } catch (e) {
        console.log('Error', e)
        res.status(400).send(e);
    }
}


