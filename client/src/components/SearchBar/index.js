import { useCallback } from "react";
import debounce from "lodash/debounce";

import StyledSearch from "./styled";

const SearchBar = ({ className, handleSearch, disabled }) => {
    const debouncedSearch = useCallback(
        debounce(e => handleSearch(e.target.value), 500),
        []
    );

    return (
        <StyledSearch
            disabled={disabled}
            className={className}
            placeholder="Look up places..."
            onChange={debouncedSearch}
            allowClear
        />
    );
};

export default SearchBar;
