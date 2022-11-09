let emailInput = document.getElementById('email');
let loginInput = document.getElementById('login');
let passwordInput = document.getElementById('password');
let replaypasswordInput = document.getElementById('replay_password');

let form = document.querySelector('.reg_form');
let error = document.querySelector('.error');
let message = document.querySelector('.succes_message');
let messageText = document.querySelector('.messageText');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let email = emailInput.value;
    let login = loginInput.value;
    let password = passwordInput.value;
    let replayPassword = replaypasswordInput.value;

    if(password != replayPassword){
        error.innerText = "Пароли не совпадают!";
    }
    else{
        if(password.length < 6){
            error.innerText = "Минимальная длина пароля 6 символов!";
        }
        else{
            error.innerText = "";
            registrate(email, login, password);
        }
    }
});

function registrate(email, login, password){
    let params = "email=" + JSON.stringify(email) + "&login=" + JSON.stringify(login) + "&password=" + JSON.stringify(password);
    let XML = new XMLHttpRequest();
    XML.open('POST', './registration.php');
    XML.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    XML.send(params);
    XML.addEventListener('load', () => {
        if(XML.responseText == ""){
            form.reset();
            message.style.display = "block";
            messageText.innerText = "Добро пожаловать, " + login + ".";
        }
        else{
            error.innerText = XML.responseText;
        }
    });
}