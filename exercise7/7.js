function checkFizzBuzz(number) {
  if (number <= 0) {
    console.log("Please enter a positive number.");
    return;
  }

  if (number % 3 === 0 && number % 7 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 7 === 0) {
    console.log("Buzz");
  } else {
    console.log("The number is not divisible by 3 or 7.");
  }
}
let number = prompt(`insert ur number`);
checkFizzBuzz(number);
