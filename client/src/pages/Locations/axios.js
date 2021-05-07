import axios from "axios";

export const getMapData = async () => {
  var mapData;

  await axios.get("/getMapData").then(res => {
    
    mapData = res;
  });
  return mapData;
};