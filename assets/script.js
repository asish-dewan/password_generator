// Assignment Code
var generateBtn = document.querySelector("#generate");
var uCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lCase = 'abcdefghijklmnopqrstuvwyz';
var numeric = '0123456789';
var specialchar = " !#$%&!#$%&'()*+,-.:;<=>?@]^_`{|}~ ";
//var validate = (uCase && lCase && numeric && specialchar);

// Define generatePassword

function generatePassword() {
  var randomPass = "";

  // Choose length of password
  let passwordlength = window.prompt("Choose the length of your password");

  // Add min and max conditions
  if (passwordlength < 8) {
    alert("Password is too short. Mininum number = 8");
  } else if (passwordlength > 128) {
    alert("Password is too long. Max number = 128");
  }
  // Confirm Uppercase
  else {
    let uCaseOp = window.confirm(
      "Do you want to include 'UPPERCASE' characters?"
    );
    if (uCaseOp == true) {
      randomPass += uCase;
    }
    // Confirm Lowercase
    let lCaseOp = window.confirm(
      "Do you want to include 'lowercase' characters?"
    );
    if (lCaseOp == true) {
      randomPass += lCase;
    }
    // Confirm numeric and/or special characters
    let numericOp = window.confirm(
      "Do you want to include 'Numeric' characters?"
    );
    if (numericOp == true) {
      randomPass += numeric;
    }
    let specialcharOp = window.confirm(
      "Do you want to include 'Special' characters?"
    );
    if (specialcharOp == true) {
      randomPass += specialchar;
    }

    // Validate at least one character selected
    let validate = window.confirm(
      "Have you selected at least ONE character type?"
    );
    if ((validate = !true)) {
      alert("Please select at least ONE character type");
    }
    
  }

  let finalpassword = "";
  for (let i = 0; i < passwordlength; i++) {
    finalpassword += randomPass.charAt(
      Math.floor(Math.random() * randomPass.length)
    );
  }
  return finalpassword;
}

// Run write password script

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

