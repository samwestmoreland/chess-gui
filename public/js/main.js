// Import the Chessboard.js library
import Chessboard from 'path/to/chessboard.js';

// Initialize the chessboard
const board = Chessboard('board', 'start');

// Example: Add an event listener to handle moves
board.on('square_click', (square) => {
    // This function will be called when a square is clicked.
    console.log(`Square clicked: ${square}`);
});
