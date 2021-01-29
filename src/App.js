import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import LoginControl from "./components/LoginControl";
import NameForm from "./components/NameForm";
import NumberList from "./components/NumberList";
import Reservation from "./components/Reservation";
import Toggle from "./components/Toggle";

const numbers = [1, 2, 3, 4, 5];

function App() {
  return (
    <>
      <Clock />
      <Toggle />
      <LoginControl />
      <NumberList numbers={numbers} />
      <NameForm />
      <Reservation />
    </>
  );
}

export default App;
