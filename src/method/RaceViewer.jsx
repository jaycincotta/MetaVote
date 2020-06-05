import React, { useState } from "react";
import CandidateViewer from "./CandidateViewer";
import Ranker from "./Ranker";
import ValidateVote from "./ValidateVote";

export default function RaceViewer({ race, method, next }) {
  const createArray = size => new Array(size).fill(0);

  const [vote, setVote] = useState(createArray(race.candidates.length));

  function castVote(index, value) {
    // Don't bother updating if no change
    if (value === vote[index]) return;

    const newVote = [...vote];
    newVote[index] = value;
    setVote(newVote);
  }

  const rankerFactory = (index, race) => (
    <Ranker
      method={method}
      vote={vote[index]}
      setVote={value => castVote(index, value)}
      race={race}
    />
  );

  const { message, ratingError } = ValidateVote(vote, method);

  return (
    <div>
      <h1>{race.title}</h1>
      {!!method && (
        <>
          <p>
            {race.description}
            <br />
            using <b>{method.name}</b>
          </p>
          {race.candidates.map((candidate, n) => (
            <CandidateViewer
              key={`candidate${n}`}
              candidate={candidate}
              ranker={rankerFactory(n, race)}
              invalid={ratingError[n]}
            />
          ))}
        </>
      )}
      {!!message && <div className="error">{message}</div>}
      <button disabled={!!message && !!method} onClick={() => next(vote)}>
        Next
      </button>
    </div>
  );
}
