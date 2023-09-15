// Import the Chessboard.js library
const Chessboard2 = require('@chrisoakman/chessboard2/dist/chessboard2.min.js');

// Initialize the chessboard
const board = Chessboard2('myBoard')

// Example: Add an event listener to handle moves
board.on('square_click', (square) => {
    // This function will be called when a square is clicked.
    console.log(`Square clicked: ${square}`);
});
