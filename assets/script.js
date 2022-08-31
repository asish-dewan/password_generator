// Assignment Code
var generateBtn = document.querySelector("#generate");
var char = ["0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&!#$%&'()*+,-.:;<=>?@]^_`{|}~"];
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
  var passwordlength = prompt ('Enter your password length');

// Limit min length 8 and max length 128 
if (passwordlength < 8 ) {
    alert ("Password does not meet the min. length requirement. Please try again. ");
  } 
  
else if (passwordlength > 128) {
  alert ("Password is too long. Please enter try again. ");
  }

// Lowercase, Uppercase and numeric prompts
  else {
    window.alert ("Click OK to include ' lowercase ' characters");
    window.alert ("Click OK to include ' UPPERCASE ' characters");
    window.alert ("Click OK to include ' numeric ' characters");
  }

// Validate input
  for (var i = 0; i === passwordlength; i++){
  var index = Math.floor(Math.random() * char.length);
  password += char.substring(index, index + 1)
  }

  console.log (index)
// Display password



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

