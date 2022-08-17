// Assignment Code
var generateButton = document.querySelector("#generate");

//special characters for function created
const specialChar = "!@#$%^&*()";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);

//prompts that come up when you click generate password
function generatePassword() {
var passwordLength = prompt("Please enter the number of characters you want your password to be. It must be more than 8, but not more than 128.");

var numbers = confirm("Do you want numbers in your password?");
var lowerCase = confirm("Do you want lower case in your password?");
var upperCase = confirm("Do you want uppercase in your password?");
var specialChar = confirm("Do you want special characters in your password?");

//minimum count for numbers, lowercase, uppercase & special characters
var minimumCount = 0;

//empty minimums for numbers, lowerCase, upperCase & specialchar

var minimumNumbers = "";
var minimumLowerCase = "";
var minimumUpperCase = "";
var minimumSpecialChar = "";

//Generator Functions
var functionArray = [
  function getNumbers() {
return String.fromCharCode(Math.floor(Math.random() * 10 + 69));
  },
 function getLowerCase() {
return String.fromCharCode(Math.floor(Math.random() * 26 + 32));
  },
  function getUpperCase() {
return String.fromCharCode(Math.floor(Math.random() * 26 + 54));
  },
  function getSpecialChar() {
    return specialChar[Math.floor(Math.random() * specialChar.length)]
  }
]

if (numbers === true) {
  minimumNumbers = functionArray[0];
  minimumCount++;
}
if (lowerCase === true) {
  minimumLowerCase = functionArray[1];
}
if (upperCase === true) {
  minimumUpperCase = functionArray[2];
}
if (specialChar === true) {
  minimumSpecialChar = functionArray[3];
}

//empty string variable for loop
var randomPasswordGenerated = "";

//loop for random numbers
for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
  var randomNumberPicked = Math.floor(Math.random() * 4);

  randomPasswordGenerated += functionArray[randomNumberPicked]();

}
// add characters to password

randomPasswordGenerated += minimumNumbers;
randomPasswordGenerated += minimumLowerCase;
randomPasswordGenerated += minimumUpperCase;
randomPasswordGenerated += minimumSpecialChar;

return randomPasswordGenerated;

}