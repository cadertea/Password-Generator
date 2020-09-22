
const start = document.getElementById('generate')
start.addEventListener('click', generatePassword)
var passwordLength = 0;


// Prompts that come up after you click generate password
function generatePassword() {
    // Was placed here in order to update the password and generate a new one everytime, by also deleting the previous one that was generated, on the screen.
    var passwordText = document.querySelector("#password");

    passwordText.value = "Your password will be displayed here";

    passwordLength = parseInt(prompt("Please enter the number of characters you want for your new password.  It must be more than 8 but less than 21."));
    if (passwordLength > 8 && passwordLength < 21) {
        // Validates user input
        // Start user input prompts
        getPrompt()
    } else {
        alert('You must input a value between 8 and 21');
        generatePassword()
    }
}
// Prompts
function getPrompt() {

    var numbers = confirm("Do you want numbers in your password?");

    var lowerCases = confirm("Do you want lowercases in your password?");

    var upperCases = confirm("Do you want uppercases in your password?");

    var special = confirm("Do you want special characters in your password?");


    if (!numbers && !lowerCases && !upperCases && !special) {
        alert('No options were chosen please choose one');
        getPrompt()
    } else {
        creatingPassword(numbers, lowerCases, upperCases, special);

    }
}


// Generator functions
var functionArray = {
    getNumbers: function () {
        return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function () {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function () {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function () {
        const Symbols = '!@#$%^&*()<>?~';
        return Symbols[Math.floor(Math.random() * Symbols.length)];

    }


};
//Function creating password using cases below
function creatingPassword(numbers, lowerCases, upperCases, special) {

    // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
    var minimumCount = 0;
    // Empty string until it is generated
    var randomPasswordGenerated = "";
    // Checks to make sure user selected ok for all and uses empty minimum from above
    while (minimumCount < passwordLength) {
        if (numbers === true && minimumCount < passwordLength) {
            randomPasswordGenerated += functionArray.getNumbers();

            minimumCount++;

        }

        if (lowerCases === true && minimumCount < passwordLength) {
            randomPasswordGenerated += functionArray.getLowerCases();
            minimumCount++;

        }

        if (upperCases === true && minimumCount < passwordLength) {
            randomPasswordGenerated += functionArray.getUpperCases();
            minimumCount++;

        }

        if (special === true && minimumCount < passwordLength) {
            randomPasswordGenerated += functionArray.getSpecialCharacters();
            minimumCount++;

        }
    }

    //Console log to insure it is working.
    console.log(randomPasswordGenerated);
    // Call upon the id of password in the HTML document
    var passwordText = document.querySelector("#password");
    //updates the value of PasswordText to the generated Password
    passwordText.value = randomPasswordGenerated;

};


// This function copies the created Password onto the clipboard and also alerts the user when they initiate the function
function copyPassword() {
    document.querySelector("#password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard");

}