const pwdCheckbox = document.getElementById("checkbox");

pwdCheckbox.addEventListener('click', function () {

    const password = document.getElementById('signUpPassword');
    if (password.type === 'password')
        password.type = "text";
    else
        password.type = 'password';
});

