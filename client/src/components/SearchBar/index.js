import StyledSearch from "./styled";

const SearchBar = ({ className, onSearch }) => {
    const handleSearch = () => {};

<<<<<<< HEAD
const SearchBar = () => {
    return <input type="text" />;
=======
  return (
    <StyledSearch
      className={className}
      placeholder="Look up places..."
      onSearch={handleSearch}
      allowClear
    />
  );
>>>>>>> 07e7eb60c287a6dae2656b1b15c874ad1b778f55
};

export default SearchBar;
