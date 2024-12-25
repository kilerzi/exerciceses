function countdown(number) {
  let result = [];

  for (let i = number; i >= 0; i--) {
    result.push(i);
  }
  return result;
}

const countdownArray = countdown(5);

console.log(countdownArray);
