import express from "express";
import bodyParser from "body-parser";

//app and port
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true})); // enabling the use of body
app.use(express.static("public")); //tell index.js where to find the static files e.g. .css / images

const blogArray = []; //array that saves all posts

//page that asks for users name
app.get("/", (req, res) => {
    res.render("index.ejs");
})

//when name is entered, go to the blog page - pass along the blogArray and userName
app.post("/enter", (req, res) => {
    const name = req.body["fName"];
    //console.log(blogArray);
    res.render("main.ejs", {userName: name, posts: blogArray})
});

//when presing create post send user to post creation page
app.post("/create", (req, res) => { 
    const name = req.body["userName"];
    res.render("create.ejs", {userName: name});
});

//when user saves a post in the post creation page
app.post("/save", (req, res) => {
    const name = req.body["userName"];
    let title = req.body["title"]; //getting the title
    let description = req.body["description"];; //getting the description
    let editing = req.body["isEditing"]; //tells whether or not the post was edited or created
    //console.log(req.body);

    if(editing === "true"){ //checks whether the post saved was edited or created
        blogArray[req.body["id"]] = new blogPost(title, description);
    } else {
        blogArray.push(new blogPost(title, description)); //if not edited, then push the post to the array
    }

    //console.log(blogArray)

    res.render("main.ejs", {posts: blogArray, userName: name});
});

//when clicking on edit send to post creation page and send id so post can be identified
app.post("/edit", (req, res) => {
    //console.log(req.body);
    const name = req.body["userName"];
    const id = req.body["postId"];

    res.render("create.ejs", {userName: name, postId: id, posts: blogArray});
});

//remove post with the index of the delete button that was cliced
app.post("/delete", (req, res) => {
    const name = req.body["userName"];
    const id = req.body["postId"];
    blogArray.splice(id, 1); //remove 1 post at the specific id

    res.render("main.ejs", {userName: name, postId: id, posts: blogArray});
});

app.listen(port, () => { //app is listening at specific port
    console.log(`Listening on port ${port}`);
})

//blogPost object
function blogPost(title, description){
    this.title = title;
    this.description = description;
}