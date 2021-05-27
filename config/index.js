// Setting our node environment, by default it is development
// setting the env to production ensures:
//     logging is kept to a minimum
//     more caching level take place to optimize performance

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const config = {
    localhost: process.env.HOST,
    port: parseInt(process.env.PORT, 10),
    databaseURL: process.env.CH_URI,
    googleMapsKey: process.env.REACT_APP_MAPS_KEY,
    awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
    awsSecretKey: process.env.AWS_SECRET_KEY,
};

export default config;
