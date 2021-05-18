import { EnvironmentFilled } from "@ant-design/icons";

const Marker = ({ handleClick, data }) => {
    const markerStyle = {
        fontSize: "250%",
        color: "#08497E",
    };

    return (
        <EnvironmentFilled
            style={markerStyle}
            onClick={() => {
                handleClick(data);
            }}
        />
    );
};

export default Marker;
