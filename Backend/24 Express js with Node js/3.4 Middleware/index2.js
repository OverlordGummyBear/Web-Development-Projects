import express from "express";
import morgan from "morgan" //morgan is a logging middleware

const app = express();
const port = 3000;

app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
