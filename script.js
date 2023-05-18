//Password Char Arrays
var upperAlph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var specChar = ["!", "#", "$", "%", "^", "&", "*", "(", ")", ".", ",", "?"] 

var numChar = ["0","1","2", "3", "4", "5", "6", "7", "8", "9"]


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // length of password to be passed as for loop controller
    var userLength = getLength();

    // booleans to
    var userUpper = confirm("Select 'OK' to include upper case letters.");
    var userLower = confirm("Select 'OK' to include upper case letters.");
    var userNumber = confirm("Select 'OK' to include numbers.");
    var userSpecial = confirm("Select 'OK' to include special case letters.");

    var userChoices = []

    if(userUpper === true){
        userChoices.push(0)
    }
    if(userLower === true){
        userChoices.push(1)
    }
    if(userNumber === true){
        userChoices.push(2)
    }
    if(userSpecial === true){
        userChoices.push(3)
    }

    console.log(userChoices);



  var password = generatePassword(userLength, userChoices);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(numLength, choiceArr){

    var newPassword;

    for (let index = 0; index < numLength; index++) {
        
        switch(x){
            case 1:
                
                break;
            case 2:
                break;
            case 3:
                break;
        }
        
    }
    
    return newPassword;
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

// 
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


    
// }
