import { Drawer } from "antd";

import { details as detailsToRender } from "./constant";
import { Container } from "./styled";

import LocationPlaceholder from "../../assets/placeholder-location.jpg";

const LocationDetails = ({
    visible,
    onClose,
    location
}) => {

    const renderDetails = (loc) => {
        return Object.keys(detailsToRender).map(detail => {
            return (
                detail != "hours" && 

                <span
                    key={`${location.name}-${detail}`}
                    className={`detail ${detail}`}
                >
                    {detailsToRender[detail]}
                    {loc[detail] ? loc[detail] : `No ${detail} listed.`}
                </span>
            );
        })
    }

    return (
        <Container>
            <Drawer
                height="auto"
                placement="bottom"
                visible={visible}
                onClose={onClose}
            >
                <img src={location.img ? location.img : LocationPlaceholder} alt={location.name}/>
                <span className="top">
                    <h1>{location.name}</h1>
                    {location.distance && `${location.distance}km away`}
                </span>
                {renderDetails(location.details)}
            </Drawer>
        </Container>
    );
}

export default LocationDetails;