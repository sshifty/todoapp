 
import toDoLayout from './toDoLayout';
import basicModal from './basicModal';
import {createProject} from './testForm';
import { searchLocalProject } from './projects';
import {displayHome} from './displayHome';

export const displayProjects=(ul)=>{
    let projects=searchLocalProject();
console.log(projects);
    ul.innerHTML='';
    projects.forEach((proj,index)=>{        
        let li=document.createElement("li");
        li.setAttribute("data-project",proj.name);
        li.textContent=proj.name;        
        ul.appendChild(li);     
        li.addEventListener('click',function(){
            console.log(projects)
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
    addButton.classList.add("btn-add-project");
    basicModal();
    
   
    //textContent
    homeText.textContent="Home";
    projectText.textContent="Projects";
    addButton.textContent="+";
    homeText.addEventListener('click',function(){
        displayHome();
    })
    homeText.classList.add("home-text");
    ul.classList.add("project-list");

    //append
    
    navContainer.append(homeText,projectText,ul);
    displayProjects(ul);
    navContainer.appendChild(addButton);

    addButton.addEventListener("click",function(){
        createProject();
        
    });
})();

 

