import { useState, useEffect } from "react";

import personService from "./services/persons";

import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Person from "./components/Person";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    personService.getAll().then((numbers) => {
      setPersons(numbers);
    });
  }, []);

  const showNotification = (message) => {
    setMessage(message);
    setTimeout(() => setMessage(null), 5000);
  };

  const showError = (message) => {
    setError(true);
    showNotification(message);
    setTimeout(() => setError(false), 5000);
  };

  const filteredPersons = persons.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName === "") {
      alert("A name must be entered");
      return;
    }

    const person = persons.find((p) => p.name === newName);

    if (person) {
      const message = `${person.name} is already added to phonebook, replace the old number with a new one?`;
      if (window.confirm(message)) {
        personService
          .update(person.id, { ...person, number: newNumber })
          .then((response) => {
            setPersons(
              persons.map((p) => (p.id === response.id ? response : p))
            );
            showNotification(`Updated ${person.name}`);
          })
          .catch((error) => {
            showError(
              `Information of ${person.name} has already been removed from server`
            );
          });
      }
    } else {
      personService
        .create({ name: newName, number: newNumber })
        .then((response) => setPersons(persons.concat(response)));
      showNotification(`Added ${newName}`);
    }

    setNewName("");
    setNewNumber("");
  };

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.destroy(id);
      setPersons(persons.filter((p) => p.id !== id));
      showNotification(`Deleted ${name}`);
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} error={error} />

      <Filter
        handleSearchSubmit={(e) => e.preventDefault()}
        setFilter={setFilter}
      />

      <h1>Add a new</h1>

      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />

      <h1>Numbers</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredPersons.map((person) => (
            <Person
              key={person.id}
              person={person}
              deletePerson={() => deletePerson(person.id, person.name)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
