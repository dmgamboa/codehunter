import axios from "axios"

export const getMapData = () => {
  axios.get("/sample")
  .then(res => {
    console.log("data")
  })
}