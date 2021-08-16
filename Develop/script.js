// Assignment Code
var generateBtn = document.querySelector("#generate");
var specials = ['@','%','+','/','!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var uppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var finalPassOptions = [];
var password = [];
var passLength = [];

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join('');
  var questionOptions = questions();
  console.log(questionOptions);
  console.log(questionOptions.length);
  //var passLength = questionOptions.length // *** can I set a var equal to the length of another variable

  if (questionOptions.lower === true ) {
    questionOptions.length - 1; // *** this function isn't working. How do I deduct 1 of each character from the list to ensure it's captured
    finalPassOptions.push('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    password.push(lowers[Math.floor(Math.random() * lowers.length)]); 
  }

  if (questionOptions.upper === true ) {
    passLength - 1;
    finalPassOptions.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    password.push(uppers[Math.floor(Math.random() * uppers.length)]);
  }

  if(questionOptions.special === true) {
    passLength - 1;
    finalPassOptions.push('@','%','+','/','!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.');
    password.push(specials[Math.floor(Math.random() * specials.length)]);
  }

  if(questionOptions.number === true) {
    passLength - 1;
    finalPassOptions.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    password.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }

  console.log(finalPassOptions);
  console.log(questionOptions.length);
  console.log(password.join(''));

  for(let i = 0; i < passLength; i++){
    //password.push(finalPassOptions(Math.floor(Math.random())));
  }
  
  password.join('');
}

//need to offer options for password criteria. criteria needs to include length (>=8, <=128)
function questions() {
  var length = window.parseInt(prompt("Please indicate password length between 8 and 128 characters"));
     // *** is an if statement needed to ensure user selects between 8 and 128 characters ?
    if(length < 8 || length > 128 || isNaN(length) || length === null) {
      window.alert("You need to provide a valid answer. Please try again.");
      return questions();
    }

  var upper = window.confirm("Would you like to include uppercase letters in your password?");

  var lower = window.confirm("Would you like to include lowercase letters in your password?");

  var special = window.confirm("Would you like to include special characters in your password?");

  var number = window.confirm("Would you like to include numbers in your password?");

  var options = {
    length:length,
    upper:upper,
    lower:lower,
    special:special,
    number:number,
  }
  return options;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
