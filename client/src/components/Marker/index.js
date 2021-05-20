import { EnvironmentFilled } from "@ant-design/icons";

const Marker = ({ handleClick }) => {
    const markerStyle = {
        fontSize: "250%",
        color: "#08497E",
    };

    return (
        <EnvironmentFilled
            style={markerStyle}
            onClick={handleClick}
        />
    );
};

export default Marker;
