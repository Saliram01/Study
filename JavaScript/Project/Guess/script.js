function Random(){
    return Math.floor(Math.random() * 10 + 1);
}

function UserGuessNum(){
    let userValue = document.querySelector('#user').value;
    let comp = Random();

    if(userValue === '')
    {
        alert('Please enter a number');
        document.querySelector('#user').focus();
    }
    else
    {
        if(Number(userValue) === comp){
            document.querySelector('#result').innerText = 'Congratulation, You Win !!';
        }
        else {
            document.querySelector('#result').innerText = 'Sorry, Try Again !!';
        }
        document.querySelector('#user').value = '';
        document.querySelector('#guessNumber').innerText += ` ${userValue}, `;
        document.querySelector('.g').classList.add('guess')
    }
}

function Reset(){
    document.querySelector('#result').innerText = '';
}