import { Input } from "antd";

import StyledSearch from "./styled";

const SearchBar = ({
  onSearch
}) => {

  const { Search } = Input;

  const handleSearch = () => {

  }

  return (
    <StyledSearch
      placeholder="Look up places..."
      onSearch={handleSearch}
      allowClear
    />
  );
};

export default SearchBar;