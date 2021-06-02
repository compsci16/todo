function getProjectHtml(title) {
    const str = `<h2>
        <span> ${title} </span> 
        <span class = "projEdit"> <i class = "fas fa-edit"></i></span >
        <span class = "projDel"> <i class = "fas fa-trash-alt"></i></span>
        </h2>`
    return str;
}

export default function displayProject(id, title, timestamp) {
    const projectsDescription = document.getElementById('projectsDescription'); 
    let div = document.createElement('div');
    div.innerHTML = getProjectHtml(title);
    div.setAttribute('id', id);
    timestamp = timestamp ? timestamp.toMillis() : Date.now();
    div.setAttribute('timestamp', timestamp);
    projectsDescription.appendChild(div);

}