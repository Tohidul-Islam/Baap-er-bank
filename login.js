// step-1: add event handler with submit button click
document.getElementById('submit-button').addEventListener('click', function () {
    // step-2: get the email address from the email input field
    // always remember to get input field text to use .value
    const email = document.getElementById('email-input');
    const emailText = email.value;
    // step-3: get the password  from the password input field
    const password = document.getElementById('password-input');
    const passwordText = password.value;

    // Danger::::: Do not verify email and password . don't use it!
    // step-4:: Verify email and password
    if (emailText === 'polapain@gmail.com' && passwordText === 'amiterpola') {
        window.location.href = 'bank.html';
        // const login = document.getElementById('login-page');
        // login.style.display = 'none';
        // const bank = document.getElementById('bank');
        // bank.style.display = 'block';
    }
    else {

        alert('Wrong Email or Password. Please enter correct email or password')
    }
})




