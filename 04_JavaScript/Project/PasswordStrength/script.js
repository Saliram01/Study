const pass = document.querySelector('#password');
const msg = document.querySelector('#message');
const show = document.querySelector('#show');

/*
const strWeak = /[a-z]/;
const strMedium = /\d+/;
const strStrong = /.*[!@#$%^&*()_-~]/;
if(password.value.match(strWeak)) // example
*/

pass.addEventListener('input',() =>{
	if(pass.value.length > 0) {
		msg.style.display = 'block';
		show.style.display = 'block';

		if(pass.value.length < 4) {
			msg.innerText = "Password is weak";
		}
		else if(pass.value.length >= 4 && pass.value.length < 8) {
			msg.innerText = "Password is medium";
		}
		else if(pass.value.length >= 8){
			msg.innerText = "Password is strong";
		}
	}
	else {
		msg.style.display = 'none';
		show.style.display = 'none';
	}
})

show.addEventListener('click',() => {
	if(pass.type === 'password') {
		pass.type = 'text';
		show.innerText = 'Hide'
	}
	else{
		pass.type = 'password';
		show.innerText = 'Show'
	}
})