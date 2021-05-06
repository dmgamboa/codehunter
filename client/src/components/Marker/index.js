import React from "react"
import { MobileTwoTone } from "@ant-design/icons"
import MarkerWindow from "../MarkerWindow"

const Marker = ({ show, place }) => {
  const markerStyle = {
    cursor: "pointer",
    fontSize: "300%",
  }

  return (
    <>
      <MobileTwoTone twoToneColor="#00cccc" style={markerStyle} />
      {show && <MarkerWindow />}
    </>
  )
}

export default Marker