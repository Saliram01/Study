let boxes = document.querySelectorAll(".box");
let turn0 = true;
let winner = document.querySelector('#winner');
let btn = document.querySelector('#btn');
let count = 0;

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn0) {
            box.innerText = '0';
            turn0 = false;
        }
        else {
            box.innerText = 'X';
            turn0 = true;
        }
        box.disabled = true;
        count++

        let isWinner = CheckWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

function gameDraw() {
    winner.innerText = `Game Was Over, Try Again`;
}

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

const CheckWinner = () => {
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != '' && pos2 != '' && pos3 != '') {
            if (pos1 === pos2 && pos2 === pos3) {
                winner.innerText = `Congratulations, Winner is ${pos1}`;
            }
        }
    }
}

btn.addEventListener('click', () => {
    for (let box of boxes) {
        count = 0;
        winner.innerText = '';
        box.innerText = '';
    }
})
