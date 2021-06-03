import 'bootstrap/dist/css/bootstrap.min.css';
import homeHtml from '../../html/home.html';
import homecss from '../../styles/home.css';
import modalcss from '../../styles/project-modal.css';
import currentProjectcss from '../../styles/current-project.css'
import { Tooltip, Toast, Popover } from 'bootstrap';
import enableSignOutBtnFunctionality from '../signOut';
import notLoggedIn from '../notLoggedIn';
import saveProject from '../saveProject';
import loadProjects from '../loadProjects';

function homeProjectToggle() {
    const homeBtn = document.getElementById('homeBtn');
    homeBtn.addEventListener('click', function () {
        const homeDisplay = document.getElementById('projectsDescription');
        const currentProjectDisplay = document.getElementById('currentProject');
        currentProjectDisplay.style.display = 'none';
        homeDisplay.style.display = 'block';
    })
}


enableSignOutBtnFunctionality();
notLoggedIn();
saveProject();
loadProjects();
homeProjectToggle();