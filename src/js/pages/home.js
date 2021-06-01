import 'bootstrap/dist/css/bootstrap.min.css';
import homeHtml from '../../html/home.html';
import homecss from '../../styles/home.css';
import modalcss from '../../styles/project-modal.css';
import { Tooltip, Toast, Popover } from 'bootstrap';
import enableSignOutBtnFunctionality from '../signOut';
import notLoggedIn from '../notLoggedIn';
import loggedInActions from '../loggedInActions';
import modalAddTaskBtn from '../modalAddTaskBtn';
import saveProject from '../saveProject'
enableSignOutBtnFunctionality();
notLoggedIn(); 
loggedInActions();
modalAddTaskBtn();
saveProject(); 