//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from "body-parser"; //bodyparser is a part of express
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url)); 

const app = express();
const port = 3000;
var userIsAuthorized = false;

app.use(bodyParser.urlencoded({extended: true})); //urlencoded look for submission form and data from them

function passwordCheck(req, res, next){
    const password = req.body["password"];
    if(password === "ILoveProgramming"){
        userIsAuthorized = true;
    }
    next();
}

app.use(passwordCheck);

app.post("/check", (req, res) => {
    //This is acceptable, but Angela says it would make more sense to have it as a middleware
    //var typedPassword = req.body.password;
    //if(typedPassword === "ILoveProgramming") res.sendFile(__dirname + "/public/secret.html");
    //else res.sendFile(__dirname + "/public/index.html");

    if(userIsAuthorized) {
        userIsAuthorized = false;
        res.sendFile(__dirname + "/public/secret.html");
    } else{
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
})