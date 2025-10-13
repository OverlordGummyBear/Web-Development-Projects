//Steps to create a server 
//1. Create directory (3.10 Express server)
//2. Create index.js file (this one)
//3. Initialize npm (npm init in terminal) - node package manager
//4. Install express (server package or web application framework for Node.js, used to build web applications and APIs)
    //Remember to add "type": "module", under "main" in the package.json file, so we can use the import
//5. Create server
import express from "express" 
const app = express(); //create an app using the express object
const port = 3000;

app.listen(port, () => { //we specify the port (the location of the server where we are going to be listening from request from the client side) and callback function (function that will trigger when the server is set up)
console.log(`Server running on port ${port}`);
});

//6. start server
//node index.js - express deal with all the node related stuff which makes it much easier for us
    //we can find the server in the browser under localhost:port
    //localhost is when we don't have a server on the internet and want to host the server locally (we make our own pc the server of our backend)
    //port is like doors and each have an address. When we set up the server, we said that he port/door we want to listen on is port 3000, and when we try to access localhost 3000, it will look onto our computer and find the door and enter and find the application


//We can check which port on our computer is currently listening for interactions from the outside
//type into the terminal: netstat -ano | findstr "LISTENING"