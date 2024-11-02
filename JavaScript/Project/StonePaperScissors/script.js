let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice'); // select all options
const msg = document.querySelector('#msg'); // message element select

const userScoreNum = document.querySelector('#user-score'); // score updation user
const compScoreNum = document.querySelector('#com-score'); // score updation comp 

const selectUser = document.querySelector('#selectUser'); // select user
const selectComp = document.querySelector('#selectCom'); // select comp

const btn = document.querySelector('#btn'); // reset button

// random choice computer
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3)
    return options[random];
}

// game was draw
const drawGame = () => {
    msg.innerText = `Game was draw!`;
    msg.style.backgroundColor = '#081b31';
}

// winner function
const ShowWinner = (userWin) => {
    if (userWin) {
        msg.innerText = `You win!`;
        msg.style.backgroundColor = 'green';
        userScore ++
        userScoreNum.innerText = userScore;
    }
    else {
        msg.innerText = `You lose!`;
        msg.style.backgroundColor = 'red';
        compScore++
        compScoreNum.innerText = compScore;
    }
}

// play ground 
const playGame = (userChoice) => {
    let compChoice = genCompChoice();
    selectComp.innerText = compChoice;

    if (userChoice === compChoice) {
        drawGame(); // Draw game
    }
    else {
        let userWin = true;

        if (userChoice === 'rock') {
            // scissors ,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === 'paper') {
            // rock ,scissors
            userWin = compChoice === 'scissors' ? false : true;
        }
        else {
            // rock ,paper
            userWin = compChoice === 'rock' ? false : true;
        }

        ShowWinner(userWin)
    }
}

btn.addEventListener('click',() => {
   window.location.reload();
})

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
        selectUser.innerText = userChoice;
    })
})