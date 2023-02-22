let coinFlip = Math.round(Math.random())
let choice = prompt("Please select Heads or Tails")

// Determine if result is heads or tails based on a certain number (e.g. 0.5)
let result = (coinFlip < 0.5) ? "Heads" : "Tails";

// Display message based on user's choice and result of coin flip
if (result === "Heads") {
  if (choice === "Heads") {
    alert("The flip was heads and you chose heads...you win!")
  } else {
    alert("The flip was heads but you chose tails...you lose!")
  }
} else {
  if (choice === "Heads") {
    alert("The flip was tails but you chose heads...you lose!")
  } else {
    alert("The flip was tails and you chose tails...you win!")
  }
}
