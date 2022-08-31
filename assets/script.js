// Assignment Code
var generateBtn = document.querySelector("#generate");
var char = "0123456789Abcdefghijklmnopqrstuvwxyz!#$%&!#$%&'()*+,-.:;<=>?@]^_`{|}~";
var passwordlength = (8 <= 128);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Define generatePassword

function generatePassword () {

// Prompt for the length of the password
  prompt ('Enter your password length');

// Limit min length 8 and max length 128 
if (passwordlength < 8 ) {
    alert ("Password does not meet the min. length requirement. Please try again. ");
  } 
  
else if (passwordlength > 128) {
  alert ("Password is too long. Please enter try again. ");
  }
// Lowercase prompt

// Uppercase prompt

// Numeric prompt

// Special characters prompt (This can be and/or option)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

