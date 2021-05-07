// Our application entry point
const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 8000;
const uri = "mongodb+srv://teamfourcodehunter:cityofvancouver@codecluster.ktv41.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// The database to use
const dbName = "codehunterdb";
const dbCol = "locations";

app.get("/getMapData", (req, res) => {
  async function run() {
    try {
      await client.connect();
      console.log("Connected correctly to server");
      const db = client.db(dbName);
      const col = db.collection(dbCol);
      
      const response = await col.find().toArray();
      
      // Send it back
      res.send(response);
    } catch (err) {
      console.log(err.stack);
    } finally {
      //It doesn't like being closed.
      //await client.close()
    }
  }

  run().catch(console.dir);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
