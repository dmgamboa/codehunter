import React from "react";
import { EnvironmentFilled } from "@ant-design/icons";

const Marker = ({ handleClick, cultural_space_name, local_area }) => {
  const markerStyle = {
    fontSize: "250%",
    color: "#08497E"
  };

  return (
    <EnvironmentFilled
      style={markerStyle}
      onClick={() => {
        handleClick(cultural_space_name);
      }}
    />
  );
};

export default Marker;