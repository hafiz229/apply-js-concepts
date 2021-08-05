function getFactorial(number) {
  let factorial = 1;
  let i = number;
  while (i >= 1) {
    factorial *= i;
    i--;
  }
  return factorial;
}

let myFactorial = getFactorial(5);
console.log("Facetorial of 5 is", myFactorial);
