import bodyParser from "body-parser";
import morgan from "morgan"
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url)); 

const app = express();
const port = 3000;
var bandName = "";

function bandNameGenerator(req, res, next){ //make a custom middleware that creates the bandname (pre-processor)
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bodyParser.urlencoded({extended: true})); //this needs to be before the bandNameGenerator middleware
app.use(morgan("tiny"));
app.use(bandNameGenerator);

app.post("/submit", (req, res) => {
    //console.log(req.body);
    //var street = req.body.street;
    //var pet = req.body.pet;
    //var name = street + pet;

    res.send(`<h1>Your band name is: </h1> <h2> ${bandName} </h2>`);
});

app.get("/", (req, res) =>{
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
