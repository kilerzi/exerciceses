const mixedArray = [1, null, undefined, NaN, "", false, "Hello", 42, true, 0];

//ova resenije ne go najdov sam tuku go najdov na internet,znam deka boolean vrakja true i false ama neznaev deka mozes vaka da go koristis
//tuka boolean go koristam za da gi najdam true i false elementire od nizata
//boolean vrakja false ako e value false ,ako e brojkata 0,brojkata -0, ako e empty string "",ako e null,ako e undefined,ako e NaN
//skoro site drugi vrednosti gi vrakja kako true
function removeFalseValues(array) {
  return array.filter(Boolean);
}

const filteredArray = removeFalseValues(mixedArray);

console.log("Original Array:", mixedArray);
console.log("Filtered Array (without false values):", filteredArray);
