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
else {
  let uCase = confirm ("Do you want to include 'UPPERCASE' characters?");
  if (uCase == true) {
    randomPass += uCase
  }
  // Confirm Lowercase
  let lCase = confirm ("Do you want to include 'lowercase' characters?");
  if (lCase == true) {
    randomPass += lCase
  }
  // Confirm numeric and/or special characters
  let numeric = confirm ("Do you want to include 'Numeric' characters?");
  if (numeric == true) {
    randomPass += numeric
  }
  let specialchar = confirm ("Do you want to include 'Special' characters?");
  if (specialchar == true) {
    randomPass += specialchar
  }
  
}




// Validate at least one character selected

// Run write password script

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

