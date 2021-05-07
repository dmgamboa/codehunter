// Our application entry point
import  MongoClient from 'mongodb';
const uri = "mongodb+srv://teamfourcodehunter:cityofvancouver@codecluster.ktv41.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// The database to use
const dbName = "other";

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    // Use the collection "people"
    const col = db.collection("people");

    // Construct a document                                                                                                                                                              
    let personDocument = {
      "name": {
        "first": "Alan",
        "last": "Turing"
      },
      "birth": new Date(1912, 5, 23), // June 23, 1912                                                                                                                                 
      "death": new Date(1954, 5, 7), // June 7, 1954                                                                                                                                  
      "contribs": ["Turing machine", "Turing test", "Turingery"],
      "views": 1250000
    }

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(personDocument);
    // Find one document
    const myDoc = await col.findOne();
    // Print to the console
    console.log(myDoc);

  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);


// ***************************************
import express from "express"

import registration from "./api-routes/registration.route.js"

const app = express()
const port = 5000

app.use(express.json())
app.use("/registration", registration)



app.listen(port, () => {
  console.log(`app listening to port ${port}`)
})