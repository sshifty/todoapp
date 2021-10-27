import todo from '../style/todo.css';
import modalToDo from './modalToDo';
import bin from '../images/bin.png';
import {makeForm} from './testForm';
import {showDetails} from './testForm';

import { displayProjects } from './projectsLayout';
import edit from '../images/edit2.png';
import { searchLocalProject } from './projects';


const addTask=(desc,detail,date,prior)=>{
    return {
        desc,
        detail,
        date,
        prior
    }
}

export const displayToDos=(layout,todos)=>{
    
  document.querySelectorAll(".item-div").forEach(e => e.remove());
  let projects=searchLocalProject();
    if(todos){
        
        todos.forEach((item,i)=>{
           
            let itemDiv=document.createElement("div");
            let itemDesc=document.createElement("div");            
            let itemDate=document.createElement("div");            
            let itemBin=document.createElement('img');
            let itemEdit=document.createElement('img');
            let itemDetails=document.createElement('div');
            
            itemBin.addEventListener('click',()=>{
                
                // projects.find((obj,index)=>{
                //     if(obj.todos===todos){
                //        projects[index].todos.splice(i,1); 
                //        window.localStorage.setItem('todoProjects',JSON.stringify(projects));
                //     }
                // });
                projects.map((proj,index)=>{                    
                    proj.todos.map((todo,todoIndex)=>{                        
                        if(JSON.stringify(todo) === JSON.stringify(item)){                            
                            projects[index].todos.splice(todoIndex,1);
                            todos.splice(i,1);                            
                            window.localStorage.setItem('todoProjects',JSON.stringify(projects));
                        }
                    })
                })   
                      
                displayToDos(layout,todos);
            });
            itemDetails.addEventListener("click",function(){
               
                projects.map(proj=>{
                    proj.todos.map(todo=>{
                        if(todo===item){
                            showDetails(item,proj.name);
                        }
                    })
                })
                
            })
            itemEdit.addEventListener("click",function(){  
                console.log("edit")   
                projects.map(proj=>{
                    proj.todos.find(todo=>{
                        if(todo===item){
                            makeForm("edit",addTask,todo,displayToDos,layout)
                        }
                    })
                })          
                
            })
            itemBin.src=bin;
            itemBin.classList.add("item-img"); 
            itemEdit.classList.add("item-img"); 
            itemEdit.src=edit;          
            itemDesc.textContent=item.desc;                       
            itemDate.textContent=item.date;
            itemDetails.textContent="Details";
            itemDetails.classList.add("item-details-div");
            itemDesc.classList.add("item-desc");
            itemDate.classList.add("item-date");
            itemDiv.classList.add("item-div");
            itemDiv.append(itemDesc,itemDetails,itemDate,itemEdit,itemBin);
            layout.appendChild(itemDiv);
            if(item.prior==="high"){
                itemDiv.classList.add("prior-red");
            }else if(item.prior==="medium"){
                itemDiv.classList.add("prior-medium");
            }else{
                itemDiv.classList.add("prior-low")
            }
        });
    }
    
}
export default function toDoLayout(project){ 
    let projects=searchLocalProject();     
   
    const ul=document.querySelector(".project-list");
    const layout=document.querySelector(".right-container");    
    const addToDo=document.createElement("button");    
    const deleteProject=document.createElement("button");
    const buttonContainer=document.createElement("div");
    addToDo.classList.add("btn-add-new-item");
    layout.innerHTML="";
    

    deleteProject.textContent="Delete Project";
    addToDo.textContent="ADD TODO";
    
    //class
    buttonContainer.classList.add("button-container");
    
    
    buttonContainer.append(addToDo,deleteProject);
    layout.appendChild(buttonContainer); 
   
    addToDo.classList.add("todo-btn");
    deleteProject.classList.add("todo-btn");
    deleteProject.classList.add("btn-delete");
    addToDo.addEventListener("click", function () {        
        makeForm("create",addTask, project, displayToDos, layout);
    })
    deleteProject.addEventListener('click',function(){
        projects.splice(index,1);
        window.localStorage.setItem('todoProjects',JSON.stringify(projects));
        displayProjects(ul,projects);
        
    })
  
    
    let todos=project.todos;    
    displayToDos(layout,todos,projects.indexOf(project));
    
}

