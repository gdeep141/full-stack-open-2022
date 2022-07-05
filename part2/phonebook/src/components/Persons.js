const Persons = ({ persons, filter, deletePerson }) => {
  let filteredPersons = persons.filter((p) => {
    return p.name.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <>
      {filteredPersons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
          <button onClick={deletePerson}>Delete</button>
        </p>
      ))}
    </>
  );
};

export default Persons;
