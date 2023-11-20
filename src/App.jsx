import "./App.css";
import Person from "./components/Person/Person.jsx";
import PersonClass from "./components/PersonClass/PersonClass.jsx";
import React, { Component } from "react";

function App() {
  return (
    <div>
      <h2>First excercice: Functional</h2>
      <ul>
        <li>
          <Person name="Nicolás" surname="Blanco" age={19} />
        </li>
        <li>
          <Person name="Ángela" surname="Zappalá" age={46} />
        </li>
        <li>
          <Person name="Alejandro" surname="Blanco" age={52} />
        </li>
      </ul>
      <h2>First excercice: Class</h2>
      <ul>
        <li>
          <PersonClass name="Isabella" surname="Grisales" age={18} />
        </li>
        <li>
          <PersonClass name="Amanda" surname="Álvarado" age={78} />
        </li>
        <li>
          <PersonClass name="Fermin" surname="Blanco" age={84} />
        </li>
      </ul>
    </div>
  );
}

export default App;
