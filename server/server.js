/*// Our application entry point
const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 8000;
const uri = "mongodb+srv://teamfourcodehunter:cityofvancouver@codecluster.ktv41.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// The database to use


app.get("/getMapData", (req, res) => {
  
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
*/