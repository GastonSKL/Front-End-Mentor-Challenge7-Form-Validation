let inputEmail = document.getElementById('email');
let button = document.getElementById('button');

button.addEventListener('click',(event)=>{
    event.preventDefault;
    emailValidation(inputEmail.value);
})

function emailValidation(email) {
    let regExpr = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExpr.test(email)){
        inputEmail.style.border= '1px solid hsl(223, 87%, 63%)'
        error.style.display = 'none';

    }else{
        inputEmail.style.border='1px solid red';
        error.style.display = 'block';
    }
}