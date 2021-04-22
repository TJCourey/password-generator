// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Z",
];

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var symbol = [
  "!",
  "#",
  "/",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  "/",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//temp var until linked to html
var upperCaseSelected = "";
var lowerCaseSelected = "";
var symbolSelected = "";
var numSelected = "";
var lengthSelected = "";

var finalArray = [];

var arrayFunction = function () {
  if (upperCaseSelected) {
    finalArray = finalArray.concat(upperCase);
  }
  if (lowerCaseSelected) {
    finalArray = finalArray.concat(lowerCase);
  }
  if (symbolSelected) {
    finalArray = finalArray.concat(symbol);
  }
  if (numSelected) {
    finalArray = finalArray.concat(num);
  }
  console.log(finalArray);
  return finalArray;
};

var length = lengthSelected; // could be constant

var password = "";

function randomChar(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePassword() {
  var length = prompt("select between 8-128");
  upperCaseSelected = confirm("Do you want to use upper case?");
  lowerCaseSelected = confirm("Do you want to use lower case?");
  symbolSelected = confirm("Do you want to use symbols?");
  numSelected = confirm("Do you want to use numbers?");
  arrayFunction();
  for (i = 0; i <= length; i++) {
    password = password.concat(randomChar(finalArray));
  }
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
