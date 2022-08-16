// Assignment Code
var generateButton = document.querySelector("#generate");

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
var special = confirm("Do you want special characters in your password?");

//minimum count for numbers, lowercase, uppercase & special characters
var minimumCount = 0;

};