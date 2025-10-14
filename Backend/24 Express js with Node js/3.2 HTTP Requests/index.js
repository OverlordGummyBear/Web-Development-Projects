import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Angela</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


/*
Request Vocab
  Get: Want to request a resource from the website e.g. html website, a piece of text or data. We are getting something from the server
  Post: We are sending a resource to a server e.g. information such as a form with email and password. On the server side we can take that information and do something with it
  Put: Update method - replace a resource with whatever we are sending over (replace something entirely)
  Patch: Update method - we want to patch up a resource (patch what is broken)
  Delete: It deletes a resource from the server or database (request from the client side computer to the server-side computer to delete something)
*/