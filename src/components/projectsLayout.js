import {projects,makeProject} from './projects';
import toDoLayout from './toDoLayout';

const displayProjects=(ul)=>{
    ul.innerHTML='';
    projects.forEach(proj=>{        
        let li=document.createElement("li");
        li.setAttribute("data-project",proj.name);
        li.textContent=proj.name;        
        ul.appendChild(li);     
        li.addEventListener('click',function(){
            toDoLayout(proj);
        })   
    });
    
}  



export default (function(){
    //query
    const navContainer=document.querySelector(".nav-container");
    //create
    const homeText=document.createElement("h2");
    const projectText=document.createElement("h2");
    const ul=document.createElement("ul");
    const addButton=document.createElement("button");
    
    //textContent
    homeText.textContent="Home";
    projectText.textContent="Projects";
    addButton.textContent="ADD PROJECT"

    //append
    
    navContainer.append(homeText,projectText,ul);
    displayProjects(ul,addButton,navContainer);
    navContainer.appendChild(addButton);

    addButton.addEventListener("click",function(){
        let newObj=makeProject("XD");
        projects.push(newObj);
        console.log(projects)
        displayProjects(ul);
    });
})();

 

