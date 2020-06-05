import React from "react";

export default function StarRanker({ vote, setVote }) {
  return (
    <>
      <div className={`circle`} onClick={() => setVote(0)}>
        <p>X</p>
      </div>
      {[...Array(5)].map((n, i) => (
        <div
          key={`rank${i}`}
          className={`star${vote > i ? " filled" : ""}`}
          onClick={() => setVote(i + 1)}
        />
      ))}
    </>
  );
}
