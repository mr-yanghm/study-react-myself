import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import Clock from "./components/Clock";
import LoginControl from "./components/LoginControl";
import NameForm from "./components/NameForm";
import NumberList from "./components/NumberList";
import Reservation from "./components/Reservation";
import ShoppingList from "./components/ShoppingListStudy/ShoppingList";
import Toggle from "./components/Toggle";

const numbers = [1, 2, 3, 4, 5];

function App() {
  return (
    <>
      <Clock />
      <hr />
      <Toggle />
      <hr />
      <LoginControl />
      <hr />
      <NumberList numbers={numbers} />
      <hr />
      <NameForm />
      <hr />
      <Reservation />
      <hr />
      <Calculator />
      <hr />
      <ShoppingList />
    </>
  );
}

export default App;
