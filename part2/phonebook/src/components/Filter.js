const Filter = ({ handleSearchSubmit, setFilter }) => {
  return (
    <form onSubmit={handleSearchSubmit}>
      filter shown with
      <input
        type="text"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      ></input>
    </form>
  );
};

export default Filter;
