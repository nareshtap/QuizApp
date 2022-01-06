const express = require("express");
const connectDB = require("./config/db");
const answerRoute = require("./app/routes/answer.routes");
const cors=require('cors')

const app = express();

connectDB().catch(err => { console.log(err) });

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());
app.use(cors());

app.use("/api/answer", answerRoute);

app.get("/", (req, res) => res.send("WellCome to QuizApp "));


// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
