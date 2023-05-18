//Password Char Arrays
var upperAlph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var specChar = ["!", "#", "$", "%", "^", "&", "*", "(", ")", ".", ",", "?"] 

var numChar = ["0","1","2", "3", "4", "5", "6", "7", "8", "9"]


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var userLength = getLength();
    var userUpper = getUpper();
    var userLower = getLower();
    var userNumber = getNumber();
    var userSpecial = getSpecial();

    var userChoices = []

    if(userUpper === true){
        userChoices.push(0)
    }
    if(userLower === true){
        userChoices.push(0)
    }
    if(userNumber === true){
        userChoices.push(0)
    }
    if(userSpecial === true){
        userChoices.push(0)
    }

    console.log(userLength);
    console.log(userUpper);
    console.log(userLower);
    console.log(userNumber);
    console.log(userSpecial);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
    
    return "hello";
}


function getLength(){
    // prompt user and store input
    var numLength = prompt("Please enter a length for your password that is at least 8 characters and at most 128 characters.")

    // error check for valid input
    if(numLength >= 8 && numLength <= 128){
        // return length
        return numLength;
    }else{
        alert("You've entered an invalid value. Please enter a valid input.")
        getLength();
    }
}

function getUpper(){
    // prompt user and store input
    var useUpper = confirm("Select 'OK' to include upper case letters.")

    return useUpper;
}

function getLower(){
    // prompt user and store input
    var useLower = confirm("Select 'OK' to include upper case letters.")

    return useLower;
}

function getNumber(){
    // prompt user and store input
    var useNumber = confirm("Select 'OK' to include numbers.")

    return useNumber;
}

function getSpecial(){
    // prompt user and store input
    var useSpecial = confirm("Select 'OK' to include special case letters.")

    return useSpecial;
}




// var passwordLength = 0;
// try {
//     passwordLength = passwordLength.prompt();    
// } catch (error) {
    
// }

// var getUpper = getUpper.prompt("Use Upper case Yes or No");
// var getLower = getLower.prompt("Use Lower case Yes or No");
// var getSpecial = getSpecial.prompt("Use Special case Yes or No");

// var choiceArr = []

// if (getUpper == true){
//     choiceArr.push(1)
// }
// if (getLower == true){
//     choiceArr.push(2)
// }
// if (getSpecial == true){
//     choiceArr.push(3)
// }

// for (let index = 0; index < passwordLength; index++) {
//     var x = Math.floor(Math.random() * choiceArr.length);

//     switch(x){
//         case 1:
//             password.push()
//             break;
//         case 2:
//             break;
//         case 3:
//             break;
//     }
    
// }
