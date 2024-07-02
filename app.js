let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //playerO 
let count = 0;

//2D Array
const winPatterns = [ 
    [0, 1, 2], 
    [0, 3, 6], 
    [0, 4, 8], 
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turn0 = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
    count=0;
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            box.style.color="blue";
            turn0 = true;
        }
        box.disabled= true;
        count++;

        let check = checkWinner();
        
    });
});

const disabledBoxes = () => {
    for ( let box of boxes) {
        box.disabled = true;
    }
}
const enabledBoxes = () => {
    for ( let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns)
    {
        console.log(pattern[0], pattern[1], pattern[2]);
        

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if( pos1Val === pos2Val && pos2Val === pos3Val)
            {
                showWinner(pos1Val);
            }
            else if( count == 9 )
           {
                msg.innerText = "Match is Draw";
                msgContainer.classList.remove("hide");
                disabledBoxes();
           }
        }
        
    }
    return false;
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);