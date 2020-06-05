import React, { useState } from "react";
import RaceViewer from "./method/RaceViewer";
//import election from "./data/votingMethod.json";
import election from "./data/presidential.json";
import methods from "./method/methods.json";
import "./styles.css";

export default function App() {
  const methodNames = ["av", "star", "rcv"];
  const [index, setIndex] = useState(0);
  const method = methods[methodNames[index]];
  const [ballot, setBallot] = useState({});
  return (
    <div className="App">
      <RaceViewer
        race={election.races[0]}
        method={method}
        next={vote => {
          console.log("vote", vote, ballot);
          if (vote && method) {
            const newBallot = ballot;
            newBallot[method.id] = vote;
            setBallot(newBallot);
          }
          setIndex((index + 1) % 3);
        }}
      />
    </div>
  );
}
