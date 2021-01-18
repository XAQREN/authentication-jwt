const express = require("express");
const bodyparser = require("body-parser");
const InitiateMongoServer = require("./config/db.js")
const user = require("./routes/user.js")
const app = express();
// db connection
InitiateMongoServer();

//port
const PORT = process.env.PORT || 4000;

//middleware
app.use(bodyparser.json());

app.get("/",(req,res) => {
    res.json({message:"API is working"});
});


app.use("/user",user);



app.listen(PORT, (req,res) => {
    console.log(`Server started at ${PORT}`);
});