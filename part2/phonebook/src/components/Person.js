const Person = ({ person, deletePerson }) => {
  const btnStyle = {
    color: "white",
    background: "red",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
  };

  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
      <td>
        <button style={btnStyle} onClick={deletePerson}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Person;
