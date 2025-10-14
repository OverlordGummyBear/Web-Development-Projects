import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"; //it is a pre-processing middle-ware

const __dirname = dirname(fileURLToPath(import.meta.url)); //finding out the exact path to the index.html file we want to send over 

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true })); //get called before any of the route handlers. The .urlencoded tells us what kind of data we want to parse, and we choose this one because we have an html form. Every single request item now have a body

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.get("/", (req, res) => {
  //console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
