//Password Char Arrays
var upperAlph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specChar = ["!", "#", "$", "%", "^", "&", "*", "(", ")", ".", ",", "?"]


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // length of password to be passed as for loop controller
    var userLength = getLength();
    if (userLength === undefined || userLength === 0) {
        return;
    }

    // userChoices array to control switch casing
    var userChoices = []

    // booleans to create case options in switch
    var userUpper = confirm("Select 'OK' to include upper case letters.");
    var userLower = confirm("Select 'OK' to include lower case letters.");
    var userNumber = confirm("Select 'OK' to include numbers.");
    var userSpecial = confirm("Select 'OK' to include special case characters.");


    // adds choice options to choice array
    if (userUpper === true) {
        userChoices.push(0)
    }
    if (userLower === true) {
        userChoices.push(1)
    }
    if (userNumber === true) {
        userChoices.push(2)
    }
    if (userSpecial === true) {
        userChoices.push(3)
    }

    // if user says no to all options, restart password process.
    if(userUpper === false && userLower === false && userNumber === false && userSpecial=== false){
        alert("Password must include at least 1 type of characters.\nRestarting prompt.")
        writePassword();
    }

    // password variable == generatePassword with passed parameters 
    var password = generatePassword(userLength, userChoices);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(numLength, choiceArr) {
    // newPassword variable to be returned and position variables
    var newPassword = "";
    var y;
    var x;

    // loop for length of user's chosen length
    for (let index = 0; index < numLength; index++) {

        // random number for length of choice array
        x = Math.floor(Math.random() * choiceArr.length);

        // x has a position value and needs to be reassigned to the actual choice at that position
        x = choiceArr[x]    

        switch (x) {
            case 0:
                // y has a positional value that is used to pull the character at that position from the array that is paired to this case
                y = Math.floor(Math.random() * upperAlph.length);

                newPassword += upperAlph[y]

                break;
            case 1:
                // y has a positional value that is used to pull the character at that position from the array that is paired to this case
                y = Math.floor(Math.random() * lowerAlph.length);

                newPassword += lowerAlph[y];

                break;
            case 2:
                // y has a positional value that is used to pull the character at that position from the array that is paired to this case
                y = Math.floor(Math.random() * numChar.length);

                newPassword += numChar[y]

                break;
            case 3:
                // y has a positional value that is used to pull the character at that position from the array that is paired to this case
                y = Math.floor(Math.random() * specChar.length);

                newPassword += specChar[y]
                break;
        }
    }
    return newPassword;
}

function getLength() {
    // prompt user and store input
    var numLength = prompt("Please enter a length for your password that is at least 8 characters and at most 128 characters.")

    // error check for valid input
    if (numLength >= 8 && numLength <= 128) {
        // return length if parameter is acceptable
        return numLength;
    } else {
        // if paramater is not acceptable, alert user and re-prompt
        alert("You've entered an invalid value. Please enter a valid input.")
        return 0;
    }
}