import { useEffect, useState } from "react";
import Icon, { UnorderedListOutlined } from "@ant-design/icons";

import { ReactComponent as MapIcon } from "../../../assets/icons/map.svg";
import { ReactComponent as FilterIcon } from "../../../assets/icons/filters.svg";

import CircleIconBtn from "../../../components/CircleIconBtn";
import SearchBar from "../../../components/SearchBar";
import { calculateDistance } from "../../../util/calculateDistance";

import LocationsFilter from "../LocationsFilters";
import LocationDetails from "../../../components/LocationDetails";
import LocationsMap from "../LocationsMap";
import LocationsList from "../LocationsList";
import LocationsAccess from "../LocationsAccess";

import { Layout, Top } from "./styled";
import { detailsTabs, defaultFilters, testData } from "./constant";
import { getLocationsList } from "../axios";
import { message } from "antd";

const LocationsScreen = () => {
    const [locations, setLocations] = useState([]);
    const [locationsCount, setLocationsCount] = useState(500);
    const [filtersVisible, setFiltersVisible] = useState(false);
    const [detailsVisible, setDetailsVisible] = useState(false);
    const [mapView, setMapView] = useState(false);
    const [userCoords, setUserCoords] = useState(null);
    const [search, setSearch] = useState(null);
    const [filters, setFilters] = useState(defaultFilters);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [detailsLoading, setDetailsLoading] = useState(false);

    const updateLocationDistance = (coords) => {
        const newLocations = locations.map((location) => {
            let newLocation = location;
            newLocation.distance = calculateDistance(coords);
            return newLocation;
        });

        setLocations(newLocations);
    };

    const handleSearch = (val) => {
        val.trim() !== search && setSearch(val.trim());
    };

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

    const handleScroll = () => {
        locations.length < locationsCount && setPage(page + 1);
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

    const handleUserCoords = (val, init) => {
        const {
            coords: { latitude, longitude }
        } = val;

        const parsedCoords = {
            lat: latitude,
            lng: longitude
        };

        !userCoords && !init && updateLocationDistance(parsedCoords);
        setUserCoords(parsedCoords);

        init && handleLocations({coords: parsedCoords});
    };

    const handleLocationsAccess = (init) => {
        navigator.geolocation &&
            navigator.geolocation.getCurrentPosition(
                (val) => {
                    handleUserCoords(val, init);
                },
                () => message.error("Unable to get current position.")
            );
    };

    const handleLocations = async ({ coords, newList }) => {
        setLoading(true);
        
        const { sort } = filters;

        const searchAndFilter = {
            ...filters,
            cultural_space_name: search
        };
        delete searchAndFilter.sort;

        const params = {
            sort,
            filters: searchAndFilter,
            page,
            userCoords: userCoords ?? coords
        };

        let newLocations = await getLocationsList(params);
        newLocations = newList ? locations.concat(newLocations) : newLocations;
        setLocations(newLocations);

        setLoading(false);
    };

    useEffect(() => {
        handleLocationsAccess(true);
    }, []);

    useEffect(() => {
        page > 1 && handleLocations({newList: true});
    }, [page]);

    useEffect(() => {
        handleLocations({});
    }, [search, filters]);

    const detailsTabsWithHandle = detailsTabs.map((tab) => ({ ...tab, onPress: handleTabs }));

    return (
        <Layout className={mapView ? "map-view" : "list-view"}>
            {mapView && (
                <LocationsMap
                    loading={loading}
                    locations={locations}
                    handleDetails={handleDetailsOpen}
                />
            )}

            <Top>
                <SearchBar className="search" handleSearch={handleSearch} />
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
                loading={detailsLoading}
                visible={detailsVisible}
                onClose={handleDetailsClose}
                location={testData}
                tabs={detailsTabsWithHandle}
            />

            <span className="icon-buttons">
                <LocationsAccess userCoords={userCoords} handleClick={handleLocationsAccess} />
                <CircleIconBtn
                    className="view-toggle"
                    icon={mapView ? <UnorderedListOutlined /> : <Icon component={MapIcon} />}
                    onClick={handleViewToggle}
                />
            </span>

            {!mapView && (
                <LocationsList
                    loading={loading}
                    locations={locations}
                    hasMore={locations.length < locationsCount}
                    handleTabs={handleTabs}
                    handleDetailsOpen={handleDetailsOpen}
                    handleScroll={handleScroll}
                />
            )}
        </Layout>
    );
};

export default LocationsScreen;
