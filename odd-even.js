function oddEven(number) {
  if (number % 2 == 0) {
    console.log(number, "is even number.");
  }
  console.log(number, "is odd number.");
}

const myNumber = 1543;
const isMyNumberEven = oddEven(myNumber);
