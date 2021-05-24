import { useEffect, useState } from "react";
import { Tag, Form } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import Icon, { UnorderedListOutlined, ArrowUpOutlined } from "@ant-design/icons";
import startCase from "lodash/startCase";
import replace from "lodash/replace";

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
import { detailsTabs, defaultFilters, gMapsLink } from "./constant";
import { readLocations, readPlace } from "../axios";
import { message } from "antd";

const LocationsScreen = () => {
    const [form] = Form.useForm();

    const [locations, setLocations] = useState([]);
    const [locationsCount, setLocationsCount] = useState(500);
    const [locationDetails, setLocationDetails] = useState(null);
    const [filtersVisible, setFiltersVisible] = useState(false);
    const [detailsVisible, setDetailsVisible] = useState(false);
    const [mapView, setMapView] = useState(false);
    const [userCoords, setUserCoords] = useState(null);
    const [search, setSearch] = useState(null);
    const [filters, setFilters] = useState(defaultFilters);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [detailsLoading, setDetailsLoading] = useState(false);
    const [scrollArrowVisible, setScrollArrowVisible] = useState(false);
    const [mapInitialCoords, setMapInitialCoords] = useState(null);

    const updateLocationDistance = (coords) => {
        const newLocations = locations.map((location) => {
            let newLocation = location;
            newLocation.distance = calculateDistance(coords);
            return newLocation;
        });

        setLocations(newLocations);
    };

    const hasScrolledDownWindow = () => {
        const mainContent = document.getElementById("mainContent");
        if (mainContent.scrollTop > window.innerHeight) {
            return true;
        }
        return false;
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

    const handleFilterTag = (filter) => {
        let newFilters = { ...filters };
        newFilters[filter] = undefined;
        setFilters(newFilters);
        form.setFieldsValue(newFilters);
    };

    const handleDetailsClose = () => {
        setLocationDetails(null);
        setDetailsVisible(false);
    };

    const handleDetails = async (location) => {
        setDetailsLoading(true);
        setDetailsVisible(true);

        if (locationDetails?.name !== location.name) {
            const searchQuery = `${location.name}${location.website && `+ ${location.website}`}`;

            const placesData = await readPlace(searchQuery);
            const details = {
                name: location.name,
                distance: location.distance,
                bookmarked: location.bookmarked,
                visited: location.visited,
                image: placesData.image,
                details: {
                    type: location.type,
                    address: location.address,
                    hours: placesData.hours,
                    phone: placesData.phone,
                    website: location.website
                }
            };
            setLocationDetails(details);            
        }

        setDetailsLoading(false);
    };

    const handleViewToggle = () => {
        setMapView(!mapView);
    };

    const handleScroll = () => {
        locations.length < locationsCount && setPage(page + 1);
    };

    const handleScrollArrow = () => {
        setScrollArrowVisible(hasScrolledDownWindow());
    };

    const handleScrollArrowClick = () => {
        const mainContent = document.getElementById("mainContent");
        mainContent.scrollTo(0, 0);
    };

    const handleTabs = ({ tab, location }) => {
        switch (tab) {
        case "directions": {
            const destination = location.coordinates
                ? encodeURIComponent(`${location.coordinates.lat},${location.coordinates.lng}`)
                : location.address
                    ? encodeURIComponent(replace(location.address, " ", "+"))
                    : encodeURIComponent(replace(location.name, " ", "+"));
            const origin = userCoords
                ? encodeURIComponent(`${userCoords.lat},${userCoords.lng}`)
                : "";
            window.open(`${gMapsLink}destination=${destination}&origin=${origin ?? ""}`);
            break;
        }
        case "bookmark":
            // Add to Bookmarks
            break;
        case "details":
            handleDetails(location);
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

        init && handleLocations({ coords: parsedCoords });
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

        let newLocations = await readLocations(params);
        newLocations = newList ? locations.concat(newLocations) : newLocations;
        setLocations(newLocations);

        newLocations.length > 0 && setMapInitialCoords(newLocations[0].coordinates);

        setLoading(false);
    };

    useEffect(() => {
        handleLocationsAccess(true);
    }, []);

    useEffect(() => {
        page > 1 && handleLocations({ newList: true });
    }, [page]);

    useEffect(() => {
        handleLocations({});
    }, [search, filters]);

    const detailsTabsWithHandle = detailsTabs.map((tab) => ({ ...tab, onPress: handleTabs }));

    const renderFilterTags = () => {
        return Object.keys(filters).map((filter) => {
            if (filter !== "sort" && filters[filter]) {
                return (
                    <Tag key={filter} closable onClose={() => handleFilterTag(filter)}>
                        {`${startCase(filter)}: ${startCase(filters[filter])}`}
                    </Tag>
                );
            }
        });
    };

    return (
        <Layout className={mapView ? "map-view" : "list-view"}>
            <AnimatePresence exitBeforeEnter>
                {mapView && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        <LocationsMap
                            loading={loading}
                            locations={locations}
                            handleDetails={handleDetails}
                            coords={mapInitialCoords}
                        />                        
                    </motion.div>
                )}                
            </AnimatePresence>


            <Top>
                <SearchBar className="search" handleSearch={handleSearch} />
                <Icon className="filter" component={FilterIcon} onClick={handleFilterToggle} />
            </Top>

            {Object.keys(filters).length > 1 && (
                <div className="filter-tags">{renderFilterTags()}</div>
            )}

            <LocationsFilter
                form={form}
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
                location={locationDetails}
                tabs={detailsTabsWithHandle}
            />

            <span className="icon-buttons">
                <AnimatePresence exitBeforeEnter>
                    {!mapView && scrollArrowVisible && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transitition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <CircleIconBtn
                                icon={<ArrowUpOutlined onClick={handleScrollArrowClick} />}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
                <LocationsAccess userCoords={userCoords} handleClick={handleLocationsAccess} />
                <CircleIconBtn
                    className="view-toggle"
                    icon={mapView ? <UnorderedListOutlined /> : <Icon component={MapIcon} />}
                    onClick={handleViewToggle}
                />
            </span>
            
            <AnimatePresence exitBeforeEnter>
                {!mapView && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        <LocationsList
                            loading={loading}
                            detailsLoading={detailsLoading}
                            locations={locations}
                            hasMore={locations.length < locationsCount}
                            handleTabs={handleTabs}
                            handleDetails={handleDetails}
                            handleScroll={handleScroll}
                            handleScrollArrow={handleScrollArrow}
                        />
                    </motion.div>
                )}                
            </AnimatePresence>

        </Layout>
    );
};

export default LocationsScreen;
