import React from "react";
import "./voting.css";

export default function CandidateViewer({ candidate, ranker, invalid }) {
  const className = invalid ? "ranker error" : "ranker";
  return (
    <div className="candidate">
      <div className="label">
        <div className="name">
          <a href={candidate.bioUrl}>{candidate.name}</a>
        </div>
        <div className="party">
          <a href={candidate.partyUrl}>{candidate.party}</a>
        </div>
      </div>
      <div className={className}> {ranker}</div>
    </div>
  );
}
