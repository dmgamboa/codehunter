// Our application entry point
const { MongoClient } = require('mongodb')
const express = require("express");
const uri = "mongodb+srv://teamfourcodehunter:cityofvancouver@codecluster.ktv41.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const app = express();
const port = 5000;

// The database to use
const dbName = "codehunterdb"
const dbCol = "codes"

app.get("/getMapData", (req, res) => {
  async function run() {
    try {
      await client.connect()
      console.log("Connected correctly to server")
      const db = client.db(dbName)
      const col = db.collection(dbCol)
      
      const response = await col.find().toArray();

      console.log("return ", response);
  
      // Send it back
      res.send(response);
      
    } catch (err) {
      console.log(err.stack);
    } finally {
      await client.close();
    }

  }
  
  run().catch(console.dir);
})

app.listen(port, () => {
  console.log(`App listening on port ${port}.`)
})