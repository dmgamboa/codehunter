import React from "react";

const MarkerWindow = ({ name }) => {
    const markerWindowStyle = {
        position: "fixed",
        width: 200,
        backgroundColor: "white",
        boxShadow: "0 2px 7px 1px rgba(0, 0, 0, 0.3)",
        padding: 10,
        fontSize: 14,
        transform: "translateY(-80px)",
    };

    return <div style={markerWindowStyle}>{name}</div>;
};

export default MarkerWindow;
