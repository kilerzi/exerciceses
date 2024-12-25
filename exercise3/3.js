function differenceFrom13(num) {
  if (num > 13) {
    return (num - 13) * 2;
  } else {
    return 13 - num;
  }
}

let inputNumber = parseInt(prompt("insert your number"));
let result = differenceFrom13(inputNumber);

console.log(`Input: ${inputNumber} ==> Output: ${result}`);
