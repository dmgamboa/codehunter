import React from "react";
import { MobileTwoTone } from "@ant-design/icons";

const Marker = ({ handleClick, cultural_space_name, local_area }) => {
  const markerStyle = {
    fontSize: "250%"
  };

  return (
    <>
      <MobileTwoTone
        twoToneColor="#00cccc"
        style={markerStyle}
        onClick={() => {
          handleClick(cultural_space_name);
        }}
      />
    </>
  );
};

export default Marker;