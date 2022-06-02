/*-------------------------------- Constants --------------------------------*/

const winningCombos = [[0,1,2], [6,7,8], [3,4,5], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]


/*---------------------------- Variables (state) ----------------------------*/
let turn
let winner
let board


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelector(".square")
const messageEl = document.querySelector("#message")
// const resetButton = document.querySelector('#reset');

console.log(squareEls)
console.log(messageEl)
/*----------------------------- Event Listeners -----------------------------*/
 
 entireBoard.addEventListener('click', handleClick)
    


// resetButton.addEventListener('click', resetBoard)
// });

/*-------------------------------- Functions --------------------------------*/
init()
function init() {
    board =  [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = null
    render()
}


function handleClick(evt){

     const sqIdx = parseInt(evt.target.id.slice(2))
     console.log(sqIdx)
     if(board[sqIdx] !== null){
        return
     } else if (Winner !== null){
        return 
     } else {
        board[Idx]
     }
     board[sqIdx]
     render()
     
 }


function render() {
    board.forEach((square,idx) => {
        if (square === 1) {
            squareEls[idx].textContent = "0"

        } 
        if (square === -1) {
            squareEls[idx].textContent = "X"
        }
        // } else {
        //     squareEls[idx].textContent = ''
        // }
        if (winner === null) {
            return (turn === 1 ? messageEl.textContent = "Player 1's turn!!": messageEl.textContent = "Player 2's turn!!")
        } else if (winner === "T") {
            return messageEl.textContent = "Tie Game!"
        } else {
            return(winner === 1 ? messageEl.textContent = "Player 1 has won!" : messageEl.textContent = "player 2 has won")
        }
    }
    )}
//  function getWinner() {
//      for (let i = 0; i < winn)
//  }