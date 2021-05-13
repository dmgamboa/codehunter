import { useState, useEffect } from "react";
import Icon, { KeyOutlined, UnorderedListOutlined } from "@ant-design/icons";

import { ReactComponent as MapIcon } from "../../../assets/icons/map.svg"; 
import { ReactComponent as FilterIcon } from "../../../assets/icons/filters.svg";

import CircleIconBtn from "../../../components/CircleIconBtn";
import SearchBar from "../../../components/SearchBar";

import LocationsMap from "../LocationsMap";
import LocationsList from "../LocationsList";
import LocationsFilter from "../LocationsFilters";

import { Layout, Top } from "./styled";

const LocationsScreen = () => {
    const [filtersVisible, setFiltersVisible] = useState(false);
    const [mapView, setMapView] = useState(false);

    const handleViewToggle = () => {
        setMapView(!mapView);
    }

    const handleFilterToggle = () => {
        setFiltersVisible(!filtersVisible);
    }

    return (
        <Layout>
            <Top>
                <SearchBar />
                <Icon
                    className="filter"
                    component={FilterIcon}
                    onClick={handleFilterToggle}
                />
            </Top>

            <LocationsFilter
                visible={filtersVisible}
                onClose={handleFilterToggle}
            />

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