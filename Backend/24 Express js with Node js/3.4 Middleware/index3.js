import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next){ //custom middleware function
    console.log("Request method: ", req.method); //tapping into the attributes of the req
    console.log("Request URL:" + req.url);
    next(); //this is important, otherwise e.g. postman will just be hanging and it never manages to reach the handler
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
