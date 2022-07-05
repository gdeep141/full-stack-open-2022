import DisplayWeather from "./DisplayWeather";
import DisplayLanguages from "./DisplayLanguages";

const DisplayCountries = ({ countries, handleClick, search }) => {
  if (search === "") {
    return <p>Please enter a search term</p>;
  }

  if (countries.length == 0) {
    return <p>No matches found</p>;
  }

  if (countries.length == 1) {
    return (
      <div>
        <h1>{countries[0].name.common}</h1>
        <p>capital {countries[0].capital}</p>
        <p>area {countries[0].area}</p>
        <DisplayLanguages country={countries[0]} />
        <img src={countries[0].flags.png}></img>
        <DisplayWeather country={countries[0]} />
      </div>
    );
  }

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  return (
    <div>
      {countries.map((c) => (
        <p key={c.name.common}>
          {c.name.common}
          <button value={c.name.common} type="submit" onClick={handleClick}>
            show
          </button>
        </p>
      ))}
    </div>
  );
};

export default DisplayCountries;
