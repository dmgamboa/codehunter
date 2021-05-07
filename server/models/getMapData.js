// Grabs cultural location information
import mongodb from "mongodb";
const { MongoClient } = mongodb;
import config from "../config/index.js"

const uri = config.databaseURL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const dbName = "codehunterdb";
const dbCol = "locations";

const getMapData = (req, res) => {
  const run = async () => {
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
}

export default getMapData;