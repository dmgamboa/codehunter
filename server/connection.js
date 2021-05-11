// Database connection
import app from './server.js';
import mongodb from 'mongodb';
// Used to access environment variables
import config from "./config/index.js"

// import data access objects
import MapDAO from "./models/mapDAO.js"
import RegistrationDAO from "./models/mapDAO.js"

const MongoClient = mongodb.MongoClient;
const uri = config.databaseURL;
const port = config.port || 8000;

MongoClient.connect(
    uri,
    {
        // only 50 ppl can connect at one time
        poolSize: 50,
        // after 2500 ms request will timeout
        // Warning: Top-level use of w, wtimeout, j, and fsync is deprecated. Use writeConcern instead.
        wtimeout: 2500,
        // Warning: the options [useNewUrlParse] is not supported
        useNewUrlParse: true,
        useUnifiedTopology: true
    })
    // Catch any errors before connecting to db
    .catch(err => {
        console.log(err.stack);
        process.exit(1);
    })
    .then(async client => {
        // This is how we get our initial reference to our db and collection
        await MapDAO.injectDB(client);
        await RegistrationDAO.injectDB(client);


        // Starting the web server after connecting to db
        app.listen(port, () => {
            console.log(`listening on post ${port}`);
        });
    });