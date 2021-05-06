import axios from "axios"

export const getMapData = () => {
  axios.get("http://localhost:8000/example").then(res => {
    console.log(res.data)
  })
  .catch(() => {
    console.log("Nope")
  })
}