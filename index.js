//import { connect } from "mongoose";

const express = require ("express");
const mongoose = require("mongoose");

const models = require ("./models");
const getRoleMiddleware = require ("./utils/getRoleMiddleware");


//mongoose.connect("mongodb://localhost/sportCenters", {
    //useNewUrlParser: true,
   // useUnifiedTopology: true,
    //useCreateIndex: true,

 //});//

 //mongoose.set('useFindAndModify', false); await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
 // <-- no longer necessary useUnifiedTopology: true // <-- no longer necessary


 
 const url = "mongodb+srv://cyrisa02:1970vicky02@expressapi.atis6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority ";  /* path of your db */;
 
 //to connect or create our database
  mongoose.connect(url, { 
    useUnifiedTopology: true,      
    useNewURLParser: true }).then(() => {
    console.log("Connection successfull");
 }).catch((e) => console.log("No connection"))


const app = express ();

app.set("models", models);


const userRoute = require ("./routes/user");
const customerRoute = require ("./routes/customer");

app.use(express.json());
app.use(getRoleMiddleware);

userRoute(app);
customerRoute(app);

app.listen(3000, ()=> {
    console.log("Server successfully launched");
})