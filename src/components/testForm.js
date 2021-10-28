import modalToDo from '../style/modalToDo.css';
import createProjectStyle from '../style/createProject.css';
import {projects} from './projects';
import { displayProjects } from './projectsLayout';
import {searchLocalProject} from './projects';


function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

export const showDetails=(todos,name)=>{
    const modal=document.querySelector(".modal");
    const close=document.createElement("span");
    const modalContent=document.querySelector(".modal-content");
    const detailDiv=document.createElement("div");
    const desc=document.createElement("p");
    const detail=document.createElement("p");
    const date=document.createElement("p");
    const priority=document.createElement("p");
    const projectName=document.createElement("p");

    const textProject=document.createElement("p");
    const textDesc=document.createElement("p");
    const textDetail=document.createElement("p");
    const textDate=document.createElement("p");
    const textPriority=document.createElement("p");
    
    const projContainer=document.createElement("div");
    projContainer.classList.add("det-container");
    const descContainer=document.createElement("div");
    descContainer.classList.add("det-container");

    const detailContainer=document.createElement("div");
    detailContainer.classList.add("det-container");

    const dateContainer=document.createElement("div");
    dateContainer.classList.add("det-container");

    const priorContainer=document.createElement("div");
    priorContainer.classList.add("det-container");


    //textContent
    textProject.textContent="Project:";
    textDesc.textContent="Description:";
    textDetail.textContent="Details:";
    textDate.textContent="Date:";
    textPriority.textContent="Priority";

    close.innerHTML="&times";
    projectName.textContent=name;
    desc.textContent=todos.desc;
    detail.textContent=todos.detail;
    date.textContent=todos.date;
    priority.textContent=todos.prior;
    modalContent.innerHTML='';
    modal.style.display="block";

    close.classList.add("close");
    detailDiv.classList.add("detail-div");
    //append
    projContainer.append(textProject,projectName);
    descContainer.append(textDesc,desc);
    detailContainer.append(textDetail,detail);
    dateContainer.append(textDate,date);
    priorContainer.append(textPriority,priority);
    detailDiv.append(projContainer,descContainer,detailContainer,dateContainer,priorContainer);    
    modalContent.append(close,detailDiv);

    close.onclick = function () {
        modal.style.display = "none";
    };
   
}

export const createProject=()=>{
    let projects=searchLocalProject();
    const modal=document.querySelector(".modal");
    const modalContent=document.querySelector(".modal-content");
    const close=document.createElement("span");
    const createH1=document.createElement("h1");
    const createProjectHeader=document.createElement("div");
    const projectTextArea=document.createElement("textarea");
    const textContainer=document.createElement("div");
    const submitProject=document.createElement("input");
    const modalInside=document.createElement("div");
    const projectForm=document.createElement("form");
    const ul=document.querySelector(".project-list");

    //textContent
    submitProject.textContent="Add Project";
    createH1.textContent="Create Project";
    close.innerHTML="&times";
    modalContent.innerHTML='';
    modal.style.display="block";
    setAttributes(projectTextArea,{
        "class":"project-textarea",
        "required":"",
        "placeholder":"Type your new project's name here...",
        "minLength":2,
        "maxLength":15,        

    });
    setAttributes(submitProject,{
        "type":"submit",
        "form":"projectform",
        "value":"Create Project"
    })


    //class
    submitProject.classList.add("btn-submit-project")
    close.classList.add("close");
    textContainer.classList.add("text-container");
    createProjectHeader.classList.add("create-project-header");
    modalInside.classList.add("modal-inside-div");
    projectForm.classList.add("project-form");
    projectForm.setAttribute("id","projectform");
    
    
    //append
    
    textContainer.appendChild(projectTextArea);
    createProjectHeader.append(createH1,close);
    projectForm.append(textContainer);
    modalInside.append(createProjectHeader,projectForm,submitProject);
    modalContent.append(modalInside);


    
    close.onclick = function () {
        modal.style.display = "none";
    };

    projectForm.onsubmit=function(e){
        e.preventDefault();
        projects.push(
            {name:projectTextArea.value,
            todos:[]}
        )
        window.localStorage.setItem('todoProjects',JSON.stringify(projects));        
        projectForm.reset();
        modal.style.display="none";  
        
        displayProjects(ul,projects);
        
    };
}

export const makeForm=(type,addTask,project,displayToDos,layout)=>{
       
    const modal=document.querySelector(".modal");
    const modalContent=document.querySelector(".modal-content");
    modalContent.innerHTML='';
    modal.style.display="block";
    const form=document.createElement("form");
    const descText=document.createElement("textarea");
    const detailsText=document.createElement("textarea");
    const dueDateText=document.createElement("p");
    const date=document.createElement("input");
    const priorityText=document.createElement("p");
    const buttonLow=document.createElement("input");
    const labelLow=document.createElement("label");
    const buttonMedium=document.createElement("input");
    const labelMedium=document.createElement("label");
    const buttonHigh=document.createElement("input"); 
    const labelHigh=document.createElement("label");
    const createHeader=document.createElement("div");
    const createText=document.createElement("h3");
    const dateContainer=document.createElement("div");
    const priorityContainer=document.createElement("div");
    const addButton= document.createElement("button");
    const priorLeft=document.createElement("div");
    const close=document.createElement("span");
   

    //text
    createText.textContent="Create"
    labelLow.textContent="Low";
    labelMedium.textContent="Medium";
    labelHigh.textContent="High";
    dueDateText.textContent="Due Date";
    priorityText.textContent="Priority";
    addButton.textContent="Add";
    close.innerHTML="&times";

    let today = new Date();

    let todaysDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    //attribute
    descText.setAttribute("maxLength",20);
    descText.setAttribute("placeholder","Title");
    descText.setAttribute("required","");
    detailsText.setAttribute("maxLength",70);
    detailsText.setAttribute("required",'');    
    detailsText.setAttribute("placeholder","Description");
    date.setAttribute("type","date");
    date.setAttribute("value",todaysDate);
    buttonLow.setAttribute("type","radio");
    buttonMedium.setAttribute("type","radio");
    buttonHigh.setAttribute("type","radio");
    addButton.setAttribute("type","submit");
    setAttributes(buttonLow,{
        "id":"create-new-Low",
        "name":"create-new-priority",
        "value":"low",
        "required":"",
        "checked":"",        

    });
    setAttributes(buttonMedium,{
        "id":"create-new-Medium",
        "name":"create-new-priority",
        "value":"medium",
        "required":""

    });
    setAttributes(buttonHigh,{
        "id":"create-new-High",
        "name":"create-new-priority",
        "value":"high",
        "required":""

    });
    setAttributes(labelLow,{
        "for":"create-new-Low",
        "class":"create-priority create-low create-low-active",

    });
    setAttributes(labelMedium,{
        "for":"create-new-Medium",
        "class":"create-priority create-medium",

    });
    setAttributes(labelHigh,{
        "for":"create-new-High",
        "class":"create-priority create-high",

    });



    //class
    createHeader.classList.add("create-header");
    form.classList.add("create-form");
    descText.classList.add("desc-text");
    detailsText.classList.add("details-text");    
    dateContainer.classList.add("date-container");
    priorLeft.classList.add("prior-left");
    addButton.classList.add("add-btn")
    close.classList.add("close"); 
    
    priorityContainer.classList.add("priority-container");
    

    //append
    priorLeft.append(priorityText,buttonHigh,labelHigh,buttonMedium,labelMedium,buttonLow,labelLow);
    dateContainer.append(dueDateText,date);
    priorityContainer.append(priorLeft,addButton);

    form.append(descText,detailsText,dateContainer,priorityContainer);
    createHeader.append(createText,close);
    modalContent.append(createHeader,form);

    labelLow.addEventListener("click",function(){
        labelLow.classList.add("create-low-active");
        labelMedium.classList.remove("create-medium-active");
        labelHigh.classList.remove("create-high-active");

    });
    labelMedium.addEventListener("click",function(){
        labelMedium.classList.add("create-medium-active");
        labelLow.classList.remove("create-low-active");
        labelHigh.classList.remove("create-high-active");

    });
    labelHigh.addEventListener("click",function(){
        labelHigh.classList.add("create-high-active");
        labelMedium.classList.remove("create-medium-active");
        labelLow.classList.remove("create-low-active");

    });
    close.onclick = function () {
        modal.style.display = "none";
    }
    let priority;
    if(type==="create"){
        form.onsubmit=function(event){
            event.preventDefault();
            priority= document.querySelector( 'input[name="create-new-priority"]:checked').value;           
            
            let newObj;
            //need local storage
            newObj=addTask(descText.value,detailsText.value,date.value,priority);
            project.todos.push(newObj);
            
            projects.map((proj,index)=>{
                if(project.name===proj.name){                    
                    projects[index]=project;
                }
            })
            window.localStorage.setItem('todoProjects',JSON.stringify(projects));
            
                
            form.reset();
            modal.style.display="none";      
            displayToDos(layout,project.todos)    
           
        }   
    }else{
        createText.textContent="EDIT";
        descText.value=project.desc;
        detailsText.value=project.detail;
        date.setAttribute("value",project.date)
        priority= project.prior;
        
        if(priority==="high"){
            
            buttonHigh.setAttribute("checked","");            
            buttonMedium.removeAttribute("checked");
            buttonLow.removeAttribute("checked");
            labelHigh.classList.add("create-high-active");
            labelMedium.classList.remove("create-medium-active");
            labelLow.classList.remove("create-low-active")
        }else if(priority==="medium"){
            buttonMedium.setAttribute("checked","");
            buttonHigh.removeAttribute("checked");
            buttonLow.removeAttribute("checked");
            labelMedium.classList.add("create-medium-active");
            labelLow.classList.remove("create-low-active");
            labelHigh.classList.remove("create-high-active");
        }else{
            buttonLow.setAttribute("checked","");
            buttonHigh.removeAttribute("checked");
            buttonMedium.removeAttribute("checked");
            labelHigh.classList.add("create-high-active");
            labelMedium.classList.remove("create-medium-active");
            labelLow.classList.remove("create-low-active");
        }           



        form.onsubmit=function(event){
            event.preventDefault();
            priority= document.querySelector( 'input[name="create-new-priority"]:checked').value;           
            
            let tempObj;
            
            projects.map((obj)=>{
                
                obj.todos.find(todo=>{
                    if(todo===project){
                        tempObj=obj;
                        todo.desc=descText.value;
                        todo.detail=detailsText.value;
                        todo.date=date.value;
                        todo.prior=priority;
                        
                    }
                })
            });
            window.localStorage.setItem('todoProjects',JSON.stringify(projects));
            form.reset();
            modal.style.display="none";      
            
            displayToDos(layout,tempObj.todos);
           
        }   
    }
      
    
}
