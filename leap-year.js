function leapYear(year) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      return true;
    }
  } else if (year % 4 == 0) {
    return true;
  }
  return false;
}

const myYear = 2100;
const isMyYearLeapYear = leapYear(myYear);
console.log("Is", myYear, "is Leap Year?", isMyYearLeapYear);
