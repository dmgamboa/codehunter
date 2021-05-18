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
import { detailsTabs, defaultFilters, testData } from "./constant";
import { getLocationsList } from "../axios";

const LocationsScreen = () => {
    const [locations, setLocations] = useState([]);
    const [locationsCount, setLocationsCount] = useState(500);
    const [filtersVisible, setFiltersVisible] = useState(false);
    const [detailsVisible, setDetailsVisible] = useState(false);
    const [mapView, setMapView] = useState(false);
    const [userCoords, setUserCoords] = useState(null);
    const [filters, setFilters] = useState(defaultFilters);
    const [search, setSearch] = useState(null);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [detailsLoading, setDetailsLoading] = useState(false);

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

    const detailsTabsWithHandle = detailsTabs.map((tab) => ({ ...tab, onPress: handleTabs }));

    useEffect(async () => {
        let params = {
            ...filters,
            page,
            userCoords,
        };

        setLoading(true);

        // TO DO
        // Add locationsList max count
        let newLocations = await getLocationsList(params);
        newLocations = locations.length > 0 ? locations.concat(newLocations) : newLocations;
        setLocations(newLocations);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [page]);

    return (
        <Layout className={mapView ? "map-view" : "list-view"}>
            {mapView && <LocationsMap loading={loading} locations={locations} handleDetails={handleDetailsOpen}/>}

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
                loading={detailsLoading}
                visible={detailsVisible}
                onClose={handleDetailsClose}
                location={testData}
                tabs={detailsTabsWithHandle}
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
