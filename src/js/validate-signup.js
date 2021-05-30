import addUser from './addUser'; 
const validationRules = {
    signUpEmail: /.*@.*/,
    signUpPassword: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?;&]{8,}$/,
}

const getEmailPassword = function(){
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value; 
    return {email, password}; 
};

export default function(inputList){
    let numberOfValidInputs = 0; 
    inputList.forEach(input => {
        if (input.value.match(validationRules[`${input.id}`])) {
            input.classList.add('is-valid');
            input.classList.remove('is-invalid');
            numberOfValidInputs++; 
        }
        else {
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
        }
    }
    );
    if(numberOfValidInputs === inputList.length)
    addUser(getEmailPassword());    
}