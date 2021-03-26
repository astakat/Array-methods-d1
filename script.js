// A
// is een Function Expression door de const..
const addTheWordCool = function (array) {
  array.push("cool");
  return array;
};
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

// B
const amountOfElementsInArray = function (array) {
  return array.length;
};
console.log(amountOfElementsInArray(["appels", "peren", "citroenen"]));
// 3

// C
const selectBelgiumFromBenelux = function (array) {
  const first = array[0];
  return first;
};

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

// D
const lastElementInArray = function (array) {
  const last = array[array.length - 1];
  return last;
};

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

// E
const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function (array) {
  slicedPresidents = presidents.slice(1, 4);
  return slicedPresidents;
};

const impeachTrumpSplice = function (array) {
  presidents.splice(0, 1);
  return presidents;
};

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"] SLICE gives back a new array, but doesnt change the start array.
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"] SPLICE changes the content of the original array.

// F
const stringsTogether = function (array) {
  const joined = array.join(" ");
  return joined;
};

console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));
//resultaat: "Winc Academy is leuk ;-}"

// G
const combineArrays = function (array1, array2) {
  const combinedArrays = [].concat(array1, array2);
  console.log(combinedArrays);
};

combineArrays([1, 2, 3], [4, 5, 6]);
// resultaat: [1,2,3,4,5,6]
