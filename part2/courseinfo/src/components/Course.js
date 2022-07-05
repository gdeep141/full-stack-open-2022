import React from "react";

const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => <strong>total of {sum} exercises</strong>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => {
  let total = parts.reduce((s, p) => s + p.exercises, 0);

  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total sum={total} />
    </>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

export default Course;
