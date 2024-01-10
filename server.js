const express = require("express");

const app = express();

const port = 5000;

app.listen(port, () => 
{
    console.log("Started server successful.");
});

app.get("/", (request, response) => 
{
    response.send("Success.");
});

