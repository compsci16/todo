
export default function displayProject(docRef) {
    docRef.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type == "added") {
                const projectsDescription = document.getElementById('projectsDescription');
                let project = document.createElement('div');
                project.innerHTML = `<h2> <span>${change.doc.data().title}</span><span><i class="fas fa-trash-alt" ></i>
                    </span></h2>`;
                projectsDescription.appendChild(project);
            }
        })
    });
}