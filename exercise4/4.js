// Function to find which number is closer to 100
function closerTo100(num1, num2) {
  let diff1 = 100 - num1;
  let diff2 = 100 - num2;

  // Determine which number is closer
  if (diff1 < diff2) {
    return `${num1} is closer to 100`;
  } else if (diff2 < diff1) {
    return `${num2} is closer to 100`;
  } else {
    return `Both numbers are equally close to 100`;
  }
}

let input1 = parseInt(prompt(`insert your first number`));
let input2 = parseInt(prompt(`insert your second number`));

let result = closerTo100(input1, input2);

alert(result);
