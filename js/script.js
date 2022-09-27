const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    
    const guess = letterInput.value;

    const goodGuess = validateInput(guess);

    if (goodGuess) {
        makeGuess(guess);
    }
    letterInput.value = "";    
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "You have to enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "You have to enter one letter at a time.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please guess a letter between A and Z.";
    } else {
    return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUppercase;
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter! Try again.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};