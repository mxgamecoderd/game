const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import routes
const guessNumberRoute = require('./routes/guess-number');

// Middleware
app.use(express.json());

// Routes
app.use('/api/guess-number', guessNumberRoute);

// Root endpoint
app.get('/', (req, res) => {
    res.send("Welcome to the Guess the Number API! Use /api/guess-number to start playing.");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
