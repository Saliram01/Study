localStorage.setItem('username','user');
localStorage.setItem('password','pass123');

document.querySelector('#loginForm').addEventListener('submit',(e) => {
    e.preventDefault();
    
    let user = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    let storeUser = localStorage.getItem('username');
    let storePassword = localStorage.getItem('password');

    if(user === storeUser && password === storePassword ){
        window.location.href = 'demo.html';
    }
    else{
        alert("Invalid user and password");
    }
})
