function getDayOfWeek(month, day, year) {
  const date = new Date(year, month - 1, day);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[date.getDay()];
}

// Example usage
const month = parseInt(prompt("Enter month: "), 10);
const day = parseInt(prompt("Enter day: "), 10);
const year = parseInt(prompt("Enter year: "), 10);
console.log(`The day of the week is: ${getDayOfWeek(month, day, year)}`);
