import { useCallback } from "react";
import debounce from "lodash/debounce";

import StyledSearch from "./styled";

const SearchBar = ({ className, handleSearch }) => {
    const debouncedSearch = useCallback(
        debounce(e => handleSearch(e.target.value), 500),
        []
    );

    return (
        <StyledSearch
            className={className}
            placeholder="Look up friends..."
            onChange={debouncedSearch}
            allowClear
        />
    );
};

export default SearchBar;
