// Assignment Code
var generateBtn = document.querySelector("#generate");
var uCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lCase = 'abcdefghijklmnopqrstuvwyz';
var numeric = '0123456789';
var specialchar = " !#$%&!#$%&'()*+,-.:;<=>?@]^_`{|}~ ";


// Define generatePassword

function generatePassword () {
  var randomPass = "";

 
/*   for (var i = 0; i <= passwordlength; i++)
  {
    var index = Math.floor(Math.random() * chars.length)
    password += chars[index];
    } 

    console.log ("button clicked")

    var passwordlength
 */
}
// Choose length of password
let passwordlength = prompt ("Choose the length of your password");

// Add min and max conditions
if (passwordlength < 8) {
  alert ("Password is too short. Mininum number = 8");
}
else if (passwordlength > 128) {
  alert ("Password is too long. Max number = 128");
}
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

