import Icon from "@ant-design/icons";

import { ReactComponent as FilterIcon } from "../../../assets/icons/filters.svg";

import StyledDrawer from "./styled";

const LocationsFilters = ({ visible, onClose }) => {
    return (
        <StyledDrawer
            placement="bottom"
            height="100%"
            visible={visible}
            onClose={onClose}
            title={(
                <>
                    <Icon component={FilterIcon} />
                    <h1>Sort and Filter</h1>
                </>
            )}
        >
            Hello!
        </StyledDrawer>
    );
}

export default LocationsFilters;