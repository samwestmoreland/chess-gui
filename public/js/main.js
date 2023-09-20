var board = Chessboard('myBoard', {
  draggable: true,
  moveSpeed: 'medium',
  snapbackSpeed: 500,
  snapSpeed: 100,
  position: 'start',
  pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
  onDrop: onDrop
})

function flip() {
  console.log("current orientation", board.orientation())
  white = board.orientation() == 'white'
  if (!white) {
    board.orientation('white')
  } else {
    board.draggable = false
    board.orientation('black')
  }

  $.get('/flip', {'white': !white}, function(response) {
    r = JSON.parse(response)
    console.log(r.fen)
    console.log(r.message)
    board.position(r.fen)
    board.draggable = true
    $( "#message" ).text(r.message)
  });
}
