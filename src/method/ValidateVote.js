function isNumber(value) {
  if (value === undefined || value === null || value === "") {
    return false;
  }
  // eslint-disable-next-line eqeqeq
  return Number(value) == value;
}

function isVote(vote) {
  if (!vote) return "Null vote is invalid";
  if (!Array.isArray(vote)) return "Vote must be an array of numbers";
  if (vote.some(rating => !isNumber(rating))) return "Vote must only include numbers";
}

function isOutOfRange(vote, ratingError, min, max) {
  vote.forEach((rating, n) => {
    if (rating < min || rating > max) {
      console.log("error", rating, n, min, max, vote);
      ratingError[n] = true;
    }
  });
  return ratingError.some(x => x);
}

export default function ValidateVote(vote, method) {
  var message = isVote(vote);
  var ratingError = Array(vote.length).fill(!!message);

  if (!message) {
    if (!method) {
      message = "Undefined voting method";
    } else {
      const maxRating = method.id === "rcv" ? vote.length : method.maxRating;
      if (isOutOfRange(vote, ratingError, method.minRating, maxRating)) {
        message = method.rangeError;
      } else if (method.id === "rcv") {
        var candidate;
        for (candidate = 0; candidate < vote.length; candidate++) {
          const rating = vote[candidate];
          const count = vote.reduce((count, value) => (value === rating ? count + 1 : count), 0);
          if (rating > 0 && count > 1) {
            console.log("DUPE", candidate, rating, count);
            ratingError[candidate] = true;
            message = `You may not assign multiple candidates the same rating`;
          }
        }
      }
    }
  }

  return { message, ratingError };
}
