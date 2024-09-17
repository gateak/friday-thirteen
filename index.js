const readline = require('readline');

// Function to check if the 13th of a given month and year is a Friday
function isFriday13th(year, month) {
  const date = new Date(year, month - 1, 13); // month is 0-based in JavaScript Date object
  return date.getDay() === 5; // getDay() returns 5 for Friday
}

// Function to find the next year with a Friday the 13th in the specified month
function findNextFriday13th(month) {
  const currentYear = new Date().getFullYear();
  let year = currentYear;
  while (!isFriday13th(year, month)) {
    year++;
  }
  return year;
}

// Set up readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for user input
rl.question("Enter the month number (1 for January, 12 for December): ", (input) => {
  const month = parseInt(input);

  if (month < 1 || month > 12 || isNaN(month)) {
    console.log("Please enter a valid month number between 1 and 12.");
  } else {
    const year = findNextFriday13th(month);
    console.log(`The next Friday the 13th in month ${month} will be in the year ${year}.`);
  }

  rl.close();
});
