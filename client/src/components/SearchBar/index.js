import StyledSearch from "./styled";

const SearchBar = ({ className, onSearch }) => {
    const handleSearch = () => {};

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
