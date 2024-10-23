let boxes = document.querySelectorAll('.box');
const winner = document.querySelector('.title');
let turn0 = true;
let count = 0;

function reset(){
    boxes.forEach((box) => {
        box.innerText = '';
        winner.innerText = 'Tic Tac Toe';    
    })
}

boxes.forEach((box) => {
    box.addEventListener('click',() => {
       if(turn0 && box !== ''){
        box.innerText = '0';
        turn0 = false;
       }
       else{
        box.innerText = 'X';
        turn0 = true;
       }
       count++;
       let isWinner = CheckWinner();
       if(count === 9 && !isWinner){
        winner.innerText = 'Game was draw!!';
       }
    })
})

const winnerPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

function CheckWinner(){
    for(let pattern of winnerPattern){
        let box1 = boxes[pattern[0]].innerText;
        console.log(box1);
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;

        if(box1 !== '' && box2 !== '' && box3 !== ''){
            if(box1 === box2 && box2 === box3){
                winner.innerText = `Congratulation, Winner is ${box1}`;
            }
        }
    }
}

