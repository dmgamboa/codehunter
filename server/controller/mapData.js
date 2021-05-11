import MapDAO from "../models/mapDAO.js";

class MapCtrl {
    static async getMapData(req, res) {
		const response = await MapDAO.getMapData();
		res.send(response);
	}
};

export default MapCtrl;