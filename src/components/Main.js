import React, { useState, useEffect } from "react";
import classes from "./Main.css";
import ConnectingDevice from "../assets/Scan.png";
import Instruction from "../assets/Instruction.png";
import firebase from "../utils/firebase";

function Main() {
  const [clickLogin, setClickLogin] = useState(false);
  const [clickPairing, setClickPairing] = useState(false);
  const [clickSuccess, setClickSuccess] = useState(false);
  const [clickCheckList, setClickCheckList] = useState(false);
  const [clickInstruction, setClickInstruction] = useState(false);
  const [clickCommencing, setClickCommencing] = useState(false);
  const [clickListening, setClickListening] = useState(false);
  const [clickAnalyze, setClickAnalyze] = useState(false);

  const loginButtonClickedHandler = () => {
    setClickLogin(true);
    createTodo();
    console.log("Log into HeartBose System");
  };

  const pairingButtonClickedHandler = () => {
    setClickLogin(false);
    setClickPairing(true);
  };

  const successButtonClickedHandler = () => {
    setClickLogin(false);
    // setClickPairing(false);
    setClickSuccess(true);
  };

  const checkListButtonClickedHandler = () => {
    setClickSuccess(false);
    setClickCheckList(true);
  };

  const instructionButtonClickedHandler = () => {
    setClickCheckList(false);
    setClickInstruction(true);
  };

  const commencingButtonClickedHandler = () => {
    setClickInstruction(false);
    setClickCommencing(true);
  };

  const listeningButtonClickedHandler = () => {
    setClickCheckList(false);
    // setClickCommencing(false);
    setClickListening(true);
  };

  const [name, setName] = useState("");
  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  const createTodo = () => {
    const userRef = firebase.database().ref("Users");
    const user = {
      name,
      normal: true,
    };
    userRef.push(user);
  };

  const mainPrompt =
    clickLogin === true ? (
      <div className={classes.PairingPage}>
        <div className={classes.connecting}>
          Connecting to the device . . .
          <div className={classes.deviceName}>- {name}'s stethoscope-</div>
          <img src={ConnectingDevice}></img>
        </div>
        <button
          className={classes.Button}
          onClick={successButtonClickedHandler}
        >
          <p>Next</p>
        </button>
      </div>
    ) : clickPairing === true ? (
      <div className={classes.SuccessPage}>
        <div>
          <button
            className={classes.Button}
            onClick={successButtonClickedHandler}
          >
            <p>Next</p>
          </button>
        </div>
      </div>
    ) : clickSuccess === true ? (
      <div className={classes.CheckListPage}>
        <div className={classes.checkListHeader}>
          <p>Before tapping next</p>
          <h1>Make sure that you</h1>
        </div>
        <div className={classes.checkone}>
          <p>at rest for at least 10 mininutes</p>
        </div>
        <div className={classes.checktwo}>
          <p>find a comfortable spot to lie down</p>
        </div>
        <div className={classes.checkthree}>
          <p>minimize your movements while listening procedure</p>
          <button
            className={classes.Button}
            onClick={checkListButtonClickedHandler}
          >
            <p>Next</p>
          </button>
        </div>
      </div>
    ) : clickCheckList === true ? (
      <div className={classes.InstructionPage}>
        <div className={classes.placeDevice}>
          <p>Place the device on the left chest in the region shown below</p>
        </div>
        <img src={Instruction}></img>
        <button
          className={classes.Button}
          onClick={listeningButtonClickedHandler}
        >
          <p>Get Started</p>
        </button>
      </div>
    ) : clickInstruction === true ? (
      <div className={classes.Commencing}>
        <div className={classes.upperText}>
          <p>The procedure will start in 3...2...1...</p>
        </div>
        <div className={classes.lowerText}>
          <p>Please lay down your mobile phone down before proceeding</p>
        </div>
      </div>
    ) : clickCommencing === true ? (
      <div className={classes.Listening}>
        <img src={ConnectingDevice}></img>
      </div>
    ) : clickListening === true ? (
      <div className={classes.AnalyzePage}>
        Based on our analysis
        <div className={classes.abone}>
          <p>Abnormality</p>
        </div>
        <div className={classes.abtwo}>
          <p>Abnormality</p>
        </div>
        <div className={classes.abthree}>
          <p>Abnormality</p>
        </div>
        <p>
          Please recheck the abnormality conditions again. Keep in mind that it
          is possible that it is false positive.
        </p>
        <p>
          If the abnormalites were presented for most time, please seek medical
          attention.
        </p>
      </div>
    ) : clickAnalyze === true ? (
      <div></div>
    ) : (
      <div className={classes.LoginPage}>
        <div className={classes.header}>HeartBose</div>
        <div className={classes.fb}></div>
        <div className={classes.line}></div>
        <div className={classes.name}>
          <input
            type="text"
            onChange={handleOnChange}
            value={name}
            placeholder="Enter Your Name"
          />
        </div>
        <div className={classes.loginBtn}>
          <button
            className={classes.Button}
            onClick={loginButtonClickedHandler}
          >
            <p>Start</p>
          </button>
        </div>
      </div>
    );

  return <div className={classes.Main}>{mainPrompt}</div>;
}

export default Main;
