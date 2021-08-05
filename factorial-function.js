function getFactorial(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}

let myFactorial = getFactorial(5);
console.log("Facetorial of ", number, "is", myFactorial);
