/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  typeof s !== "string"
    ? console.log("s.split is not a function")
    : (s = s.split("").reverse().join(""));

  console.log(s);
}
