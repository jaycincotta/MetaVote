export default function isNumber(value) {
  if (value === undefined || value === null || value === "") {
    return false;
  }
  // eslint-disable-next-line eqeqeq
  return Number(value) == value;
}
