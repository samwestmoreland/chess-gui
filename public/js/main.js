// Import the Chessboard.js library
import { Chessboard2 } from "@chrisoakman/chessboard2/dist/chessboard2.min.js";

const board = Chessboard2('board2', 'start')

window.setTimeout(makeRandomMove, 500)

function makeRandomMove () {
  if (game.game_over()) return

  const legalMoves = game.moves()
  const randomIdx = Math.floor(Math.random() * legalMoves.length)
  game.move(legalMoves[randomIdx])
  board.position(game.fen())

  window.setTimeout(makeRandomMove, 500)
}
