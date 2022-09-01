// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define generatePassword

function generatePassword () {
  var chars = ["0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&!#$%&'()*+,-.:;<=>?@]^_`{|}~"];

  var passwordlength = 128;
  var password = "";

  for (var i = 0; i <= passwordlength; i++)
  {
    var index = Math.floor(Math.random() * chars.length)
    password += chars[index];
    } 

    console.log ("button clicked")

}
// Choose length of password

// Add min and max conditions

// Confirm Uppercase

// Confirm Lowercase

// Confirm numeric and/or special characters

// Validate at least one character selected

// Run write password script

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

