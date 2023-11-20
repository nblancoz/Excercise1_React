import React from "react";

const Person = (props) => {
  return (
    <div>
      <p>
        Person: Name: {props.name}, Surname: {props.surname}, Age: {props.age}
      </p>
    </div>
  );
};

export default Person;
