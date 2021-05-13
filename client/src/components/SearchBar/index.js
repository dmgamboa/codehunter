import { Input } from "antd";

import StyledSearch from "./styled";

const SearchBar = ({
  className,
  onSearch
}) => {

  const { Search } = Input;

  const handleSearch = () => {

  }

  return (
    <StyledSearch
      className={className}
      placeholder="Look up places..."
      onSearch={handleSearch}
      allowClear
    />
  );
};

export default SearchBar;