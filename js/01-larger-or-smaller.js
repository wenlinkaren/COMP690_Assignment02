const num1 = parseInt(prompt("Enter the first integer:"))
const num2 = parseInt(prompt("Enter the second integer:"))

let result

if (num1 > num2) {
  result = num1
} else if (num2 > num1) {
  result = num2
} else {
  result = "Both numbers are equal"
}

document.write(`<h2>The larger number is: ${result}</h2>`)