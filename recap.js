var time = "10:15pm";
var bookPrice = 150;
var isWhiteColor = false;

// array
var partners = ["sajib", "mojid", "nojid", "lajid"];
var elementCount = partners.length;
var nojidIndex = partners.indexOf("nojid");
partners.push("kajit");
partners.pop();

//conditionals
if (bookPrice < 120) {
  console.log("I will buy this book");
} else {
  console.log("May be later");
}

// loop
var i = 0;
while (i <= 17) {
  console.log(i);
  i++;
}

for (var i = 0; i <= 17; i++) {
  console.log(i);
}

// function
function isMoonUp(time) {
  if (time >= 19 && time <= 5) {
    return true;
  }
  return false;
}

// let & const
let price = 27;
const myName = "Hafiz";
