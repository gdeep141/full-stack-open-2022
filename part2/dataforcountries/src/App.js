import { useState, useEffect } from "react";
import axios from "axios";

import Search from "./components/Search";
import DisplayCountries from "./components/DisplayCountries";

function App() {
  const [search, setSearch] = useState("");
  const [exactSearch, setExactSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  // Retrieve data once on page load
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data))
      .catch((err) => console.error(err));
  }, []);

  // Filter countries every time search is changed
  useEffect(() => {
    setFilteredCountries(
      countries.filter((c) =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((c) => c.name.common === exactSearch)
    );
  }, [exactSearch]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Search handleChange={handleSearchChange} />

      <DisplayCountries
        search={search}
        countries={filteredCountries}
        handleClick={(e) => {
          setExactSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
