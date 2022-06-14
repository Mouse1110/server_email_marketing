var express = require("express");
var app = express();

// env
require('dotenv').config();

// cors
const cors = require("cors");
app.use(cors());

//body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// mongoose api
require("./utils/mongoose")

// version
const version = `v${process.env.APPLICATION_VERSION}`;

const userRouter = require('./routers/user.router')
app.use(`/${version}/user`, userRouter)

const campaignRouter = require('./routers/campaign.router')
app.use(`/${version}/campaign`, campaignRouter)


app.listen(5000,function(){
    console.log("Running...");
});

app.get("/",function(req,res){
    res.json("Hi, Joy");
})