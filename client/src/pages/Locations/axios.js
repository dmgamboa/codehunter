import axios from "axios"

export const getMapData = () => {
  axios.get("/getMapData")
  .then(console.log("data"))
}