import { useEffect, useState } from "react";
import Icon, { UnorderedListOutlined } from "@ant-design/icons";

import { ReactComponent as MapIcon } from "../../../assets/icons/map.svg";
import { ReactComponent as FilterIcon } from "../../../assets/icons/filters.svg";

import CircleIconBtn from "../../../components/CircleIconBtn";
import SearchBar from "../../../components/SearchBar";

import LocationsFilter from "../LocationsFilters";
import LocationDetails from "../../../components/LocationDetails";
import LocationsMap from "../LocationsMap";
import LocationsList from "../LocationsList";
import LocationsAccess from "../LocationsAccess";

import { Layout, Top } from "./styled";
import { detailsTabs, defaultFilters, testLocations, testData } from "./constant";
import { getLocationsList } from "../axios";

const LocationsScreen = () => {
    const [filtersVisible, setFiltersVisible] = useState(false);
    const [detailsVisible, setDetailsVisible] = useState(false);
    const [mapView, setMapView] = useState(false);
    const [userCoords, setUserCoords] = useState(null);
    const [filters, setFilters] = useState(defaultFilters);
    const [search, setSearch] = useState(null);
    const [page, setPage] = useState(1);

    const handleFilterToggle = () => {
        setFiltersVisible(!filtersVisible);
    };

    const handleFilterSubmit = (val) => {
        setFilters(val);
        setFiltersVisible(false);
    };

    const handleDetailsOpen = () => {
        setDetailsVisible(true);
    };

    const handleDetailsClose = () => {
        setDetailsVisible(false);
    };

    const handleViewToggle = () => {
        setMapView(!mapView);
    };

    const handleUserCoords = (val) => {
        const {
            coords: { latitude, longitude },
        } = val;
        setUserCoords({
            lat: latitude,
            lng: longitude,
        });
    };

    const handleTabs = (tab) => {
        switch (tab) {
            case "directions":
                // Redirect to GMaps
                break;
            case "bookmark":
                // Add to Bookmarks
                break;
            case "details":
                setDetailsVisible(true);
                break;
            case "close":
                setDetailsVisible(false);
        }
    };

    useEffect(async () => {
        /*const params = {
            userCoords: userCoords,
            page: page,
            limit: limit,
            bookmarked: bookmarked,
            visited: visited,
            local_area: local_area,
            type: type,
        };*/

        const testParams = {
            page: 1,
            limit: 10,
            filters: {
                local_area: "Downtown",
                type: "Museum/Gallery",
            },
        };

        const locationsList = await getLocationsList(testParams);
        console.log(locationsList);
    }, []);

    return (
        <Layout className={mapView ? "map-view" : "list-view"}>
            {mapView && <LocationsMap />}

            <Top>
                <SearchBar className="search" />
                <Icon className="filter" component={FilterIcon} onClick={handleFilterToggle} />
            </Top>

            <LocationsFilter
                initialValues={defaultFilters}
                visible={filtersVisible}
                onClose={handleFilterToggle}
                onFinish={handleFilterSubmit}
                hasUserCoords={userCoords ? true : false}
            />

            <LocationDetails
                visible={detailsVisible}
                onClose={handleDetailsClose}
                location={testData}
                tabs={detailsTabs}
            />

            <span className="icon-buttons">
                <LocationsAccess userCoords={userCoords} handleSuccess={handleUserCoords} />
                <CircleIconBtn
                    className="view-toggle"
                    icon={mapView ? <UnorderedListOutlined /> : <Icon component={MapIcon} />}
                    onClick={handleViewToggle}
                />
            </span>

            {!mapView && (
                <LocationsList
                    locations={testLocations}
                    handleTabs={handleTabs}
                    handleDetailsOpen={handleDetailsOpen}
                />
            )}
        </Layout>
    );
};

export default LocationsScreen;
