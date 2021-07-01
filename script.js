//global varbiles

var passwordLength;    
var createdPassword = [];
var lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "W", "W", "X", "Y", "Z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "W", "W", "X", "Y", "Z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "W", "W", "X", "Y", "Z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "W", "W", "X", "Y", "Z",];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*","!", "@", "#", "$", "%", "^", "&", "*","!", "@", "#", "$", "%", "^", "&", "*","!", "@", "#", "$", "%", "^", "&", "*","!", "@", "#", "$", "%", "^", "&", "*","!", "@", "#", "$", "%", "^", "&", "*","!", "@", "#", "$", "%", "^", "&", "*","!", "@", "#", "$", "%", "^", "&", "*","!", "@", "#", "$", "%", "^", "&", "*","!", "@", "#", "$", "%", "^", "&", "*","!", "@", "#", "$", "%", "^", "&", "*","!", "@", "#", "$", "%", "^", "&", "*","!", "@", "#", "$", "%", "^", "&", "*","!", "@", "#", "$", "%", "^", "&", "*",];
var numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var passwordTypes = "";
var stringPassword= [];
var actualPassword = ""
var passwordUpper = "";
var passwordLower  = "";
var passwordNumber = "";
var passwordSpecial = "";
var passwordLength;
var special;
var availableCharacters= [];
var realPassword;
var characterList;
var randomIndex;
var solution;
var rValue;
var random;
var solution = [];
var shuffled;
var end; 
var upperCase;
var lowercase;
var finalPassword;
var numbers;
var password;
var passwordText;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  stringPassword = [];
  password = generatePassword();
  passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//gather and validate inputs then return password

function generatePassword() { 

  //input password length

  passwordLength= window.prompt("Please enter a password length between 8 and 126")

  // validate password length

  if (passwordLength === null) {
    return;
  }
  if (passwordLength.NaN) {
    window.alert("Please enter a number");
    generatePassword();
  }
  if (((passwordLength < 8 || passwordLength > 128))) {
    window.alert("Please enter a valid length");
    generatePassword();
  }

  // Ask if the user wants upper case characters

    upperCase = window.confirm("Include uppercase characters?")
    if (upperCase) {
      stringPassword.push(upperCaseAlphabet); 
  }
  // Ask user if they want lower case characters

     lowerCase = window.confirm("Include lowercase characters?")
    if (lowerCase) {
    stringPassword.push(lowerCaseAlphabet);
  }
    // Ask user if they want special characters

    special = window.confirm("Include special characters?")
    if (special) {
      stringPassword.push(specialCharacters);
  }
    // Ask user if they want numeric characters

      numbers = window.confirm("Include numeric characters?")
     if(numbers) {
       stringPassword.push(numbersList);
    }
    //validation check to see if a category is selected

     if ( !upperCase & !lowerCase & !special & !numbers){ 
      generatePassword();
     } else

    // turn array into string
     password = stringPassword.toString();
 
     // randomize string
 
     shuffled = password.split(',').sort(function(){return 0.5-Math.random()}).join('');
 
      // create password

     finalPassword = shuffled.slice(0, passwordLength);

     return finalPassword;
  }