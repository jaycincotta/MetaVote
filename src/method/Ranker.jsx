import React from "react";
import StarRanker from "./star/StarRanker";
import ApprovalRanker from "./av/ApprovalRanker";
import RankedChoiceRanker from "./rcv/RankedChoiceRanker";

export default function Ranker({ method, vote, setVote, race }) {
  switch (method.id) {
    case "star":
      return <StarRanker vote={vote} setVote={setVote} />;
    case "av":
      return <ApprovalRanker vote={vote} setVote={setVote} />;
    case "rcv":
      return <RankedChoiceRanker vote={vote} setVote={setVote} race={race} />;
    default:
      return <p>Undefined voting method: {method.id}</p>;
  }
}
