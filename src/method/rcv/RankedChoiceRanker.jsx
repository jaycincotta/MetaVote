import React from "react";

export default function RankedChoiceRanker({ vote, setVote, race }) {
  return (
    <>
      <div className="circle" onClick={() => setVote(0)}>
        <p>X</p>
      </div>
      {[...Array(race.candidates.length)].map((n, i) => (
        <div
          key={`rank${i}`}
          className={`circle${vote == i + 1 ? " filled" : ""}`}
          onClick={() => setVote(i + 1)}
        >
          <p>{i + 1}</p>
        </div>
      ))}
    </>
  );
}
