import personService from "../services/persons";

const PersonForm = ({
  handleSubmit,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  const btnStyle = {
    color: "white",
    background: "green",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
  };

  const right = {
    textAlign: "right",
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td style={right}>name:</td>
            <td>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td style={right}>number:</td>
            <td>
              <input
                type="text"
                value={newNumber}
                onChange={(e) => {
                  setNewNumber(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td style={right}>
              <button style={btnStyle} type="submit">
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default PersonForm;
