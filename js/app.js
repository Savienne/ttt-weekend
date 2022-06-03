/*-------------------------------- Constants --------------------------------*/

const winningCombos = [[0,1,2], [6,7,8], [3,4,5], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]


/*---------------------------- Variables (state) ----------------------------*/
let turn = 1
let winner
let board = [null, null, null, null, null, null, null, null, null]


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".square")
const messageEl = document.querySelector("#message")
const resetButton = document.querySelector("#reset")

console.log(squareEls)
console.log(messageEl)
/*----------------------------- Event Listeners -----------------------------*/
 

 squareEls.forEach(function(squares) {
   squares.addEventListener('click',handleClick)
 })
// const resetButton = document.querySelector('#reset');
    


// resetButton.addEventListener('click', resetBoard)
// });

/*-------------------------------- Functions --------------------------------*/
init()
function init() {
    render()
}
    board =  [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = null
    render()



function handleClick(evt){

    let sqIdx = parseInt(evt.target.id.slice(2))
     if (board[sqIdx] !== null){
    
    return
    
    } if (winner !== null) {
    
        return 
    
    } 
        board[sqIdx] = turn
        turn = turn * (-1)
        render()
        console.log(board)
}
    



function render() {
    board.forEach((square,idx) => {
      if (square === 1) {
      squareEls[idx].textContent = "0"
      } else if (square === -1) {
        squareEls[idx].textContent = "X"
      } else {
        squareEls[idx].textContent = ''
      }
    })
    if (winner === null) {
      return (turn === 1 ? messageEl.textContent = "Player 1's turn!!": messageEl.textContent = "Player 2's turn!!")
    } else if (winner === "T") {
      return messageEl.textContent = "Tie Game!"
    } else {
      return(winner === 1 ? messageEl.textContent = "Player 1 has won!" : messageEl.textContent = "player 2 has won")
    }
  }
