const cellElements = document.querySelectorAll(".game-board .cell");

const playerO = "O";
const playerX = "X";
// const player1 = document.querySelector(".players player1");
// const player2 = document.querySelector(".players player2");

const result = document.querySelector(".result");
const result_text = document.querySelector(".result h2");
const restart_btn = document.querySelector(".result button");

let winner = false;

const WINNING_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


let toggleTurn = true;

cellElements.forEach(cell=>{
    cell.onclick=()=>{
        if(!winner){
        // console.log(cell.innerHTML);
        let currentplayer = toggleTurn ? playerO : playerX;
        cell.classList.add("disabled");
        // addInCell(cell, currentplayer);
        //console.log(currentplayer);
        cell.innerHTML = currentplayer;
        cell.classList.add(currentplayer);

        if(winnerCheck(currentplayer)){
            console.log(currentplayer + " WINNER");
            winner = true;
            result_text.innerHTML = currentplayer + " win the game"; 
        }
        else if(isDraw()){
           console.log("Draw the game!");
           result_text.innerHTML = "Draw the game"; 
        }
        
        swapPlayer();
    }    
    }
});

function winnerCheck(currentplayer){
     return WINNING_CONDITIONS.some(condition=>{
        //   console.log(condition);
        return condition.every(index=>{
            // console.log(index);
            // console.log(cellElements[index].classList.contains(currentplayer));
            return cellElements[index].classList.contains(currentplayer);
            
        });
    })
}

function selectplayer (data){
    console.log("THIS IS THE PLAYER", data)
    if(data == 1) toggleTurn = true
    else toggleTurn = false
}


function isDraw(){
    return [...cellElements] .every(cell=>{
        return cell.classList.contains(playerO) || cell.classList.contains(playerX);
    })
}

function swapPlayer(){
    toggleTurn = !toggleTurn;
    // if(toggleTurn){
    //     player1.classList.add("active");
    //     player2.classList.remove("active");
    // }else{
    //     player2.classList.add("active");
    //     player1.classList.remove("active");
    // }
}

restart_btn.onclick=()=>{
   location.reload();
}


