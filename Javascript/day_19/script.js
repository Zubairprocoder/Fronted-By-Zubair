console.log("Catch try in js");
let a = prompt("Enter your first number");
let b = prompt("Enter your second number");
if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sorry this is not allowed only number used");
}
let sum = parseInt(a) + parseInt(b);
function main() {
  let x = 2;
  try {
    console.log("The sum is ", sum * x);
    return true;
  } catch (error) {
    console.log("Error aa gaya bhai");
    return false;
  } finally {
    console.log("Files are closed and bye again try");
  }
}
main();
