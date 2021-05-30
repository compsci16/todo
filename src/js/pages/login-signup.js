import 'bootstrap/dist/css/bootstrap.min.css';
import html from "../../html/login-signup.html"; 
import css from "../../styles/login-signup.css";
import { Tooltip, Toast, Popover } from 'bootstrap';
import enableSignUpBtnFunctionality from '../signUp';
import enableSignInWithGoogleBtnFunctionality from '../googleSignIn';
import alreadyLoggedin from '../alreadyLoggedIn';


enableSignUpBtnFunctionality();
enableSignInWithGoogleBtnFunctionality();
alreadyLoggedin(); 
