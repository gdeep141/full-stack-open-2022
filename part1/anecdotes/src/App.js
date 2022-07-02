import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const DisplayMostVoted = ({ anecdotes, votes }) => {
  const maxVotes = Math.max(...votes);
  if (maxVotes === 0) {
    return (
      <div>
        <p>Nothing has been voted on yet :(</p>
      </div>
    );
  }

  return (
    <div>
      <p>{anecdotes[votes.indexOf(maxVotes)]}</p>
    </div>
  );
};

const DisplayDailyAnecdote = ({ anecdotes, votes, selected }) => {
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  console.log("");

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const randomiseSelected = () => {
    const random = Math.floor(Math.random() * (anecdotes.length - 1));
    console.log("random ", random);
    setSelected(random);
  };

  const handleVotes = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <DisplayDailyAnecdote
        anecdotes={anecdotes}
        votes={votes}
        selected={selected}
      />
      <Button handleClick={handleVotes} text="vote" />
      <Button handleClick={randomiseSelected} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <DisplayMostVoted anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;
