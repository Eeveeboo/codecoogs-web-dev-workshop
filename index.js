// Use "require" to import the express library
const express = require("express");
// Use "require" to import the path library
const path = require("path");

// Call the default method of express to create an express Application
const app = express();

// Define a "GET" type route in the application for the path "/helloworld"
// req stands for "Request" and res stands for "Response" in the handler function
app.get("/helloworld", function(req,res){
    // Set the response code to 200 for success
    res.status(200);
    // Send the text "Hello World"
    // the "send" function also ends the response.
    res.send("Hello World");
});

const staticFilePath = path.join(__dirname, "static");
const staticFiles = express.static(staticFilePath);
// Define a "USE" which starts at the defined path
app.use("/", staticFiles);

// Start the server listening on port 8080
app.listen(8080, function(){
    console.log("The server is listening on port 8080");
});