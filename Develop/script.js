// Assignment Code
var generateBtn = document.querySelector("#generate");
var specials = "'@','%','+','/','!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'";
var uppers = "'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'";
var lowers = "'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'";
var numbers = "'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'";
var finalPassOptions = [];
var password = [];

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var questionOptions = questions();
  console.log(questionOptions);
  console.log(questionOptions.length);

  if (questionOptions.lower === true ) {
    (questionOptions.length - 1); // this function isn't working. How do I deduct 1 of each character from the list to ensure it's captured
    finalPassOptions.push('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    password.push(finalPassOptions[Math.floor(Math.random() * finalPassOptions.length)]); // this function will select four random characters, but they aren't always part of the above group
  }

  if (questionOptions.upper === true ) {
    (questionOptions.length - 1);
    finalPassOptions.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    password.push(finalPassOptions[Math.floor(Math.random() * finalPassOptions.length)]);
  }

  if(questionOptions.special === true) {
    (questionOptions.length - 1);
    finalPassOptions.push('@','%','+','/','!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.');
    password.push(finalPassOptions[Math.floor(Math.random() * finalPassOptions.length)]);
  }

  if(questionOptions.number === true) {
    (questionOptions.length - 1);
    finalPassOptions.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    password.push(finalPassOptions[Math.floor(Math.random() * finalPassOptions.length)]);
  }

  console.log(finalPassOptions);
  console.log(questionOptions.length);
  console.log(password);

  for(let i = 0; i < questionOptions.length; i++){
    //password.push(finalPassOptions(Math.floor(Math.random())));
  }
  
  password.join('')

  //if (questionOptions.lower === true) { // push letter from lower array and/or run forloop logic over lower array}
}

  //need to offer options for password criteria. criteria needs to include length (>=8, <=128)
function questions() {
  var length = window.parseInt(prompt("Please indicate password length between 8 and 128 characters"));

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
