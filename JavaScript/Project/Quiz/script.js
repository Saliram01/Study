const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'Php',
        'correct': 'a'
    },
    {
        'que': 'Which year was javascript lunched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'non of the above',
        'correct': 'b'
    },
    {
        'que': 'What does CSS stand for?',
        'a': 'HyperText Markup Language',
        'b': 'CashCading Style Sheet',
        'c': 'Json Object Notation',
        'd': 'Helicopter termonial Moters',
        'correct': 'b'
    },
]

let index = 0;
let total = questions.length;
let right = 0
wrong = 0;
const queBox = document.getElementById('queBox');
const optionInput = document.querySelectorAll('.option');


function LoadQuestions() {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    queBox.innerText = `${index + 1}. ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}

function submitQuiz() {
    const data = questions[index];
    const answer = getAnswer();
    if (answer === data.correct) {
        right++
    } else {
        wrong++
    }
    index++;
    LoadQuestions();
    return;
}

function getAnswer() {
    let ans;
    optionInput.forEach((input) => {
        if (input.checked) {
            ans = input.value;
        }
    })
    return ans;
}


function reset() {
    optionInput.forEach((input) => {
        if (input) {
            input.checked = false;
        }
    })
}


function endQuiz() {
    document.querySelector('.box').innerHTML = `
    <h1>Thank you for playing the quize</h1>
    <h2>${right} / ${total} are correct</h2>
  `;
}

// initial call
LoadQuestions();