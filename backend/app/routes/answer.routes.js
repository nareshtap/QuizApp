const express = require('express');
const router = express.Router();

const AnswerController = require('../controllers/answer.controller');

//@route    Answer api/answer/
router.get(
    '/',(req, res) => {
        res.json({ message: "Welcome to Answer API" });
    }
);

//@route    GET api/answer/getAnswers
router.get('/getAnswers', AnswerController.getAllAnswers);

//@route    GET api/answer/addQuestion
router.post('/addQuestion', AnswerController.addQuestion);

//@route    GET api/answer/getQuestion
router.get('/getQuestion', AnswerController.getQuestion);

//@route    Post api/answer/addAnswer
router.post('/addAnswer', AnswerController.addAnswer);

//@route    Delete api/answer/deleteAll
router.delete('/deleteAll', AnswerController.deleteAll);

module.exports = router;
