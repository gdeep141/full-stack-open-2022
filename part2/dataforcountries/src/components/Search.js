const Search = ({ handleChange }) => {
  return (
    <p>
      Find Countries: <input type="text" onChange={handleChange} />
    </p>
  );
};

export default Search;
