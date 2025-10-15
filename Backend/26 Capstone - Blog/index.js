import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const blogArray = [];

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/enter", (req, res) => {
    const name = req.body["fName"];
    console.log(blogArray);
    res.render("main.ejs", {userName: name, posts: blogArray})
});

app.post("/create", (req, res) => {
    const name = req.body["userName"];
    res.render("create.ejs", {userName: name});
});

app.post("/submit", (req, res) => {
    let title = req.body["title"];
    let description = req.body["description"];;
    const name = req.body["userName"];
    let editing = req.body["isEditing"];
    console.log(req.body);

    if(editing === "true"){
        blogArray[req.body["id"]] = new blogPost(title, description);
    } else {
        blogArray.push(new blogPost(title, description));
    }

    console.log(blogArray)

    res.render("main.ejs", {posts: blogArray, userName: name});
});

app.post("/edit", (req, res) => {
    //console.log(req.body);
    const name = req.body["userName"];
    const id = req.body["postId"];

    res.render("create.ejs", {userName: name, postId: id, posts: blogArray});
});

app.post("/delete", (req, res) => {
    const name = req.body["userName"];
    const id = req.body["postId"];
    blogArray.splice(id, 1);

    res.render("main.ejs", {userName: name, postId: id, posts: blogArray});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

function blogPost(title, description){
    this.title = title;
    this.description = description;
}