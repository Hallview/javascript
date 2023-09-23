// Prompt the user for their age
let age = prompt("Please enter your age:");

// Prompt the user for their citizenship status
let isCitizen = prompt("Are you a citizen? (yes or no)");

// Check eligibility based on age and citizenship status
if (age >= 18 && isCitizen.toLowerCase() === "yes") {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
