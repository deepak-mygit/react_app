import React, { useState } from "react";
import ItemUi from "./Component/ItemUi";
import "./App.css";
import Container from "./Component/Container";
import FoodInput from "./Component/FoodInput";

function App() {
  // let userName = [
  //   "Deepak Kumar",
  //   "Sanjeet Kumar",
  //   "Shreekant Kumar",
  //   "Rohit Kumar",
  //   "WelcomeS",
  // ];
  //1st Way to write state
  // let textStateArr = useState("Show user name");
  // let textShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // 2nd way to write state
  let [currText, setText] = useState();
  let [userName, setuserName] = useState([
    "Shivam Gupta",
    "Ravi Gupta",
    "Rama Kumar",
  ]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newUser = event.target.value;
      let newItem = [...userName, newUser];
      setuserName(newItem);
      console.log("New user " + setuserName);
    }
    setText(event.target.value);
  };

  return (
    <Container>
      <center className="header">Student Name</center>
      <FoodInput keydownhandle={onKeyDown} />
      <p>{currText}</p>
      <ItemUi sname={userName}></ItemUi>
    </Container>
  );
}

export default App;
