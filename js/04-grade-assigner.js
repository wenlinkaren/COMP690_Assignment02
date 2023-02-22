let number = parseInt(prompt("Enter a number between 1 and 100:"))

if (number >= 1 && number <= 100) {
  if (number >= 90 && number <= 100) {
    console.log("You received an A");
  } else if (number >= 80 && number <= 89) {
    console.log("You received a B");
  } else if (number >= 70 && number <= 79) {
    console.log("You received a C");
  } else if (number >= 60 && number <= 69) {
    console.log("You received a D");
  } else {
    console.log("You received an F");
  }
} else {
  console.log("Only numbers between 1 and 100 are accepted.")
}
