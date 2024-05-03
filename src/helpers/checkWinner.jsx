function checkWinner(board, symbol) {
  if(board[0] == board[1] && board[1] == board[2] && board[2] == symbol)  return symbol;    // Top row win
  if(board[3] == board[4] && board[4] == board[5] && board[5] == symbol)  return symbol;    // Middle row win
  if(board[6] == board[7] && board[7] == board[8] && board[8] == symbol)  return symbol;    // Bottom row win

  if(board[0] == board[3] && board[3] == board[6] && board[6] == symbol)  return symbol;   // Left column win
  if(board[1] == board[4] && board[4] == board[7] && board[7] == symbol)  return symbol;   // Center win
  if(board[2] == board[5] && board[5] == board[8] && board[8] == symbol)  return symbol;   // Right column win

  if(board[0] == board[4] && board[4] == board[8] && board[4] == symbol)  return symbol;   // Diagonal win
  if(board[2] == board[4] && board[4] == board[6] && board[4] == symbol)  return symbol;   // Reverse diagonal win

  return ""
}

export default checkWinner
