import axios from "axios"

export const getMapData = () => {
  axios.get("/getMapData")
  .then(res => {
    console.log("data")
  })
}