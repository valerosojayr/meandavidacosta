var express = require ("express");
var app = express();
var port = process.env.PORT   || 8080;
var mongoose = require ("mongoose");
var morgan = require("morgan");
const bodyParser = require('body-parser')
var path = require("path");
var router = express.Router();
var appRoutes = require ("./app/routes/api") (router);

app.use (morgan('dev'))
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use("/api", appRoutes); 



var mongoose = require('mongoose');
mongoose.set('strictQuery', false); //to avoid depracation warning or disapproval warning.
const db = "mongodb+srv://database:aObnjrnLkaucBpzW@cluster101.uogtn.mongodb.net/?retryWrites=true&w=majority";
//connection string from mongodb atlas

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect (db, connectionParams)
.then (()=>{
console.log ("Connected to the Database");
}).catch((err)=>{
console.log ("Error connecting the database", err);
})







app.get("*", function (req, res){
    res.sendFile(path.join(__dirname + "/public/app/views/index.html"))
})
// no matter what the user type feed them this index page


    



app.listen ( port, function (){
    console.log("The Server is Running... " + port)
});