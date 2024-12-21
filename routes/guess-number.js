const express = require('express');
const router = express.Router();

let randomNumber = null; // Store the random number for the game

// Generate a new random number
router.get('/', (req, res) => {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a number between 1-100
    res.json({ message: "Guess the number game started! Try guessing a number between 1 and 100." });
});

// Check the user's guess
router.get('/:guess', (req, res) => {
    const guess = parseInt(req.params.guess);

    if (!randomNumber) {
        return res.json({ message: "Start the game first by accessing the /api/guess-number endpoint." });
    }

    if (guess === randomNumber) {
        const correctNumber = randomNumber;
        randomNumber = null; // Reset the game
        return res.json({ message: `🎉 Congratulations! You guessed the number: ${correctNumber}` });
    } else if (guess < randomNumber) {
        return res.json({ message: "Higher! Try again." });
    } else {
        return res.json({ message: "Lower! Try again." });
    }
});

module.exports = router;
