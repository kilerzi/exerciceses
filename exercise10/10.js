function reverseArray(arr) {
  let reversedArray = [];
  //arrayot ima 5 elementi ama array pocnuva od 0,i ako arrayot ima 5 elementi kje bide 0-5 sto e 6,zatoa stavam array lenght-1 za da ispadne 0-4 odnosno 5 elementi
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}

const originalArray = [1, 2, 3, 4, 5];
const reversed = reverseArray(originalArray);

console.log("Original Array:", originalArray);
console.log("Reversed Array:", reversed);
