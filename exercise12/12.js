function modifyArray(arr) {
  return arr.map((num) => {
    if (num % 2 === 0) {
      return num - 1;
    } else {
      return num + 1;
    }
  });
}

const originalArray = [1, 2, 3, 4, 5, 6];
const modifiedArray = modifyArray(originalArray);

console.log(modifiedArray);
