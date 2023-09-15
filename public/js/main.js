// Import the Chessboard.js library
const Chessboard = require('@chrisoakman/chessboardjs/dist/chessboard-1.0.0.min.js');

// Initialize the chessboard
const board = Chessboard('board', 'start');

// Example: Add an event listener to handle moves
board.on('square_click', (square) => {
    // This function will be called when a square is clicked.
    console.log(`Square clicked: ${square}`);
});
