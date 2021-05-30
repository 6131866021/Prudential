import React, { useState, useEffect } from "react";
import classes from "./Main.css";
import ConnectingDevice from "../assets/Scan.png";
import Instruction from "../assets/Instruction.png";
import Background from "../assets/Background.png";
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
  const [clickPulse, setClickPulse] = useState(false);

  const loginButtonClickedHandler = () => {
    setClickLogin(true);
    // createTodo();
    console.log("Log into HeartBose System");
  };

  // const pairingButtonClickedHandler = () => {
  //   setClickLogin(false);
  //   setClickPairing(true);
  // };

  const successButtonClickedHandler = () => {
    setClickLogin(false);
    // setClickPairing(false);
    setClickSuccess(true);
  };

  const checkListButtonClickedHandler = () => {
    setClickSuccess(false);
    setClickCheckList(true);
    console.log({ checkone }, { checktwo }, { checkthree });
  };

  const instructionButtonClickedHandler = () => {
    setClickCheckList(false);
    setClickCommencing(true);
  };

  // const commencingButtonClickedHandler = () => {
  //   setClickInstruction(false);
  //   setClickCommencing(true);
  // };

  const listeningButtonClickedHandler = () => {
    setClickCommencing(false);
    setClickListening(true);
  };

  const backButtonClickedHandler = () => {
    setClickListening(false);
  };

  const pulseClickedHandler = () => {
    setClickPulse(true);
  };

  const [name, setName] = useState("");
  const [checkone, setCheckOne] = useState(false);
  const [checktwo, setCheckTwo] = useState(false);
  const [checkthree, setCheckThree] = useState(false);

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  const handleOnChangeOne = (e) => {
    setCheckOne(!checkone);
  };

  const handleOnChangeTwo = (e) => {
    setCheckTwo(!checktwo);
  };

  const handleOnChangeThree = (e) => {
    setCheckThree(!checkthree);
  };

  // const createTodo = () => {
  //   const userRef = firebase.database().ref("Users");
  //   const user = {
  //     name,
  //     normal: true,
  //   };
  //   userRef.push(user);
  // };

  const inputPrompt = clickPulse ? (
    <div>
      <input
        type="text"
        onChange={handleOnChange}
        value={name}
        placeholder="Enter Your Name"
        className={classes.nameInput}
      />
      <button className={classes.loginBtn} onClick={loginButtonClickedHandler}>
        <p>Start</p>
      </button>
    </div>
  ) : (
    <div>
      <button className={classes.pulse} onClick={pulseClickedHandler}>
        <p>Login with Pulse</p>
      </button>
    </div>
  );

  const mainPrompt =
    clickLogin === true ? (
      <div className={classes.PairingPage}>
        <div className={classes.connecting}>
          <p>Connecting to the device . . .</p>
        </div>
        <div className={classes.deviceName}>- {name}'s stethoscope -</div>
        <img src={ConnectingDevice}></img>
        <div className={classes.pairingBtn}>
          <button
            className={classes.Button}
            onClick={successButtonClickedHandler}
          >
            <p>Next</p>
          </button>
        </div>
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
          <input type="checkbox" onClick={handleOnChangeOne} />
          <p>at rest for at least 10 mininutes</p>
        </div>
        <div className={classes.checktwo}>
          <input type="checkbox" onClick={handleOnChangeTwo} />
          <p>find a comfortable spot to lie down</p>
        </div>
        <div className={classes.checkthree}>
          <input type="checkbox" onClick={handleOnChangeThree} />
          <p>minimize your movements while listening procedure</p>
        </div>
        <div className={classes.checkListBtn}>
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
        <div className={classes.instructionBg}>
          <img src={Instruction}></img>
        </div>
        <div>
          <div className={classes.placeDevice}>
            <p>Place the device on the left chest in the region shown below</p>
          </div>
        </div>
        <div className={classes.layDown}>
          <p>
            Please lay down your mobile phone down after tapping “Get Statted”
          </p>
        </div>
        <button
          className={classes.Button}
          onClick={instructionButtonClickedHandler}
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
      <div
        className={classes.ListeningPage}
        onClick={listeningButtonClickedHandler}
      >
        <div className={classes.label}>Listening</div>
        <img src={ConnectingDevice}></img>
      </div>
    ) : clickListening === true ? (
      <div className={classes.AnalyzePage}>
        <div className={classes.analyzeHeader}>Your Findings:</div>
        <div className={classes.result}>
          <p>Abnormal</p>
        </div>
        <div className={classes.describeOne}>
          Please recheck the abnormality conditions again. Keep in mind that it
          is possible that it is false positive.
        </div>
        <div className={classes.describeTwo}>
          If our device interpreted your results as abnormal for multiple times
          and works properly on other person, please seek medical attention.
        </div>
        <button className={classes.Button} onClick={backButtonClickedHandler}>
          <p>Back to Login Page</p>
        </button>
      </div>
    ) : clickAnalyze === true ? (
      <div></div>
    ) : (
      <div className={classes.LoginPage}>
        <div className={classes.loginBg}>
          <img src={Background}></img>
        </div>
        <div className={classes.input}>{inputPrompt}</div>
      </div>
    );

  return <div className={classes.Main}>{mainPrompt}</div>;
}

export default Main;
