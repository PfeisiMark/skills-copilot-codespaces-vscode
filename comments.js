// Create web server
// Start web server
// Create a new comment
// Update a comment
// Delete a comment
// Get all comments
// Get a comment by ID

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

let comments = [
    {
            id: 1,
            text: "This is a comment"
        }