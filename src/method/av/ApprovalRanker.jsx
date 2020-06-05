import React from "react";

export default function ApprovalRanker({ vote, setVote }) {
  const className = `circle${vote > 0 ? " filled" : ""}`;
  return (
    <div className={className} onClick={() => setVote(vote ? 0 : 1)}>
      <p>&nbsp;</p>
    </div>
  );
}
