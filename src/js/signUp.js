import './signUpUi'; 
import Validate from './validate-signup'; 
import SignUpInputs from './signUpInputs'; 

export default function enableSignUpBtnFunctionality(){
const signUpBtn = document.getElementById('signUpSave'); 
signUpBtn.addEventListener('click', e => Validate(SignUpInputs())); 
}