function detectType(input) {
  if (!isNaN(input)) {
    return "number";
  } else {
    return "string";
  }
}

let var1 = prompt("Enter the first variable:");
let var2 = prompt("Enter the second variable:");
let var3 = prompt("Enter the third variable:");
let var4 = prompt("Enter the fourth variable:");
let var5 = prompt("Enter the fifth variable:");

console.log("The type of the first variable is:", detectType(var1));
console.log("The type of the second variable is:", detectType(var2));
console.log("The type of the third variable is:", detectType(var3));
console.log("The type of the fourth variable is:", detectType(var4));
console.log("The type of the fifth variable is:", detectType(var5));
