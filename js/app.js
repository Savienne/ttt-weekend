/*-------------------------------- Constants --------------------------------*/

const winningCombos = [[0,1,2], [6,7,8], [3,4,5], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]


/*---------------------------- Variables (state) ----------------------------*/
let turn = 1
let winner
let board = [null, null, null, null, null, null, null, null, null]


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".square")
const messageEl = document.querySelector("#message")
const resetBtn = document.querySelector("#reset-button")


// console.log(squareEls)
// console.log(messageEl)
/*----------------------------- Event Listeners -----------------------------*/
resetBtn.addEventListener("click", init)
squareEls.forEach(function(squares) {
   squares.addEventListener('click',handleClick)
 })

/*-------------------------------- Functions --------------------------------*/
init()


init()
function init() {
    board =  [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = null
    render()

}

    function handleClick(evt){

        let sqIdx = parseInt(evt.target.id.slice(2))
         if (board[sqIdx] !== null){
        
        return
        
        } if (winner !== null) {
        
            return 
        
        } 
            board[sqIdx] = turn
            turn = turn * (-1)
            getWinner()
            render()
            // console.log(board)
    }

    

    function render() {
        board.forEach((square,idx) => {
          if (square === 1) {
          squareEls[idx].textContent = "X"
          } else if (square === -1) {
            squareEls[idx].textContent = "0"
          } else {
            squareEls[idx].textContent = ''
          }
        })
        const playerTurn = turn === 1 ?  "Player 1":  "Player 2"
        if (winner === null) {
           messageEl.textContent = playerTurn + "'s turn"
    
          } else if (winner === "T") {
           messageEl.textContent = "Tie Game!"
        } else {
            const playerWin = turn === 1 ? "Player 2": "Player 1"
            messageEl.textContent = `Congrats!${playerWin} Wins! ` 
        }
    }

function getWinner() {
    winningCombos.forEach(function(combo){
         // console.log(combo)
         if(board[combo[0]] + board[combo[1]] + board[combo[2]] === 3){
             winner = 1
         }
         if  
          (board[combo[0]] + board[combo[1]] + board[combo[2]] === -3){
            winner = -1
          }
            console.log(`winner`)
          
         if (!board.includes(null)){
             winner = 'T'
         }
         
     })
 }