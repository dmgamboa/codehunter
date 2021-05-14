import { Input } from "antd";

import StyledSearch from "./styled";

const SearchBar = ({ className, onSearch }) => {
    const { Search } = Input;

    const handleSearch = () => {};

<<<<<<< HEAD
    return (
        <StyledSearch
            className={className}
            placeholder="Look up places..."
            onSearch={handleSearch}
            allowClear
        />
    );
=======
  const handleSearch = () => {

  };

  return (
    <StyledSearch
      className={className}
      placeholder="Look up places..."
      onSearch={handleSearch}
      allowClear
    />
  );
>>>>>>> 7e1a799777a000391bfdf49ff9437e471ca0f61c
};

export default SearchBar;
