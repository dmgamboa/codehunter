// Setting our node environment, by default it is development
// setting the env to production ensures: 
//     logging is kept to a minimum
//     more caching level take place to optimize performance

import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("Couldn't find .env file");
}

export default {
    localhost: process.env.HOST,

    port: parseInt(process.env.PORT, 10),

    databaseURL: process.env.CH_URI,

    database: process.env.CH_DB
}