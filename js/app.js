/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let turn
let winner
let board


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelector(".square")
const messageEl = document.querySelector("#message")
const resetButton = document.querySelector('#reset');

console.log(squareEls)
console.log(messageEl)
/*----------------------------- Event Listeners -----------------------------*/

    


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



function render() {
    board.forEach((square,index) => {
        if (square === 1) {
            squareEls[idx].textcontent = "0"

        } else if (square === -1) {
            squareEls[idx].textcontent - "X"
        } else {
            squareEls[idx].textcontent = null
        }
        if (winner == null) {
            return (turn == 1 ? messageEl.textContent = "Player 1's turn!!": messageEl.textContent = "Player 2's turn!!")
        } else if (winner == "T") {
            return messageEl.textContent = "Tie Game!"
        } else {
            return(winner === 1 ? messageEl.textContent = "Player 1 has won!" : messageEl.textContent = "player 2 has won")
        }
    
        
})}
