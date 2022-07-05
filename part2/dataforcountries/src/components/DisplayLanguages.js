const DisplayLanguages = ({ country }) => {
  if ("languages" in country) {
    return (
      <div>
        <h2>languages:</h2>
        {Object.entries(country.languages).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
        <br />
      </div>
    );
  }
};

export default DisplayLanguages;
