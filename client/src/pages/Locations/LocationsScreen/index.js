import { useState, useEffect } from "react";
import Icon, { KeyOutlined, UnorderedListOutlined } from "@ant-design/icons";

import { ReactComponent as MapIcon } from "../../../assets/icons/map.svg"; 
import CircleIconBtn from "../../../components/CircleIconBtn";

import LocationsMap from "../LocationsMap";
import LocationsList from "../LocationsList";

import { Layout } from "./styled";

const LocationsScreen = () => {

    const [mapView, setMapView] = useState(true);

    const handleViewToggle = () => {
        setMapView(!mapView);
    }

    return (
        <Layout>
            {mapView ? <LocationsMap /> : <LocationsList />}
            <CircleIconBtn
                className="view-toggle"
                icon={mapView ? <UnorderedListOutlined /> : <Icon component={MapIcon} />}
                onClick={handleViewToggle}
            />
        </Layout>
    );
};

export default LocationsScreen;