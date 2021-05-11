// Grabs cultural location information

// Used to access environment variables
import config from "../config/index.js"

let locations;

class MapDAO {

	static async injectDB(client) {
        try {
			console.log("Connected to locations collections")
			// Attempt to connect to database: "codehunterdb", collection: locations
            locations = await client.db(config.database).collection("locations");
        } catch(e) {
			console.error(`Unable to establish collection handles in getMapData: ${e}`);
        }
    }

	static async getMapData() {
		try {
			const response = await locations.find().toArray();
			console.log("response from mapDao getMapData: ", response.length )

			return response;			
		} catch (err) {
			console.log(err.stack);
		}
	}
}

export default MapDAO;