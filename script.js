//special characters for function created
const specialChar = "!@#$%^&*()";
const generateButton = document.getElementById('generate')
generateButton.addEventListener("click", writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//prompts that come up when you click generate password
function generatePassword() {
var passwordLength = prompt("Please enter the number of characters you want your password to be. It must be more than 8, but not more than 128.");

var numbers = confirm("Do you want numbers in your password?");
var lowerCase = confirm("Do you want lower case in your password?");
var upperCase = confirm("Do you want uppercase in your password?");
var special = confirm("Do you want special characters in your password?");

//minimum count for numbers, lowercase, uppercase & special characters
var minimumCount = 0;

//empty minimums for numbers, lowerCase, upperCase & specialchar

var minimumNumbers = "";
var minimumLowerCase = "";
var minimumUpperCase = "";
var minimumSpecialChar = "";

//Generator Functions
var functionArray = {
  getNumbers: function () {
return String.fromCharCode(Math.floor(Math.random() * 12 + 32));
  },
  getLowerCase: function () {
return String.fromCharCode(Math.floor(Math.random() * 14 + 72));
  },
  getUpperCase: function () {
return String.fromCharCode(Math.floor(Math.random() * 10 + 52));
  },
  getSpecialChar: function () {
    return specialChar[Math.floor(Math.random() * specialChar.length)]
  }
};

if (numbers > 8) {
  minimumNumbers = functionArray.getNumbers();
  minimumCount++;
}
if (lowerCase === true) {
  minimumLowerCase = functionArray.getLowerCase();
  minimumCount++;
}
if (upperCase === true) {
  minimumUpperCase = functionArray.getUpperCase();
  minimumCount++;
}
if (special === true) {
  minimumSpecialChar = functionArray.getSpecialChar();
  minimumCount++;
}

//empty string variable for loop
var randomPasswordGenerated = "";

//loop for random numbers
for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
  var randomNumberPicked = Math.floor(Math.random() * 4);
  
randomPasswordGenerated += randomNumberPicked;

}
// add characters to password

randomPasswordGenerated += minimumNumbers;
randomPasswordGenerated += minimumLowerCase;
randomPasswordGenerated += minimumUpperCase;
randomPasswordGenerated += minimumSpecialChar;

return randomPasswordGenerated;

}
