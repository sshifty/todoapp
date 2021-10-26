import todo from '../style/todo.css';
import modalToDo from './modalToDo';


const addTask=(desc, prior)=>{
    return {
        desc,
        prior
    }
}

const displayToDos=(layout,todos)=>{
   let items=document.querySelectorAll(".item-div").forEach(e => e.remove());
  
    if(todos){
        todos.forEach(item=>{
            let itemDiv=document.createElement("div");
            let itemDesc=document.createElement("p");
            let itemPrior=document.createElement("p");
            itemDesc.textContent=item.desc;
            itemPrior.textContent=item.prior;
            itemDiv.classList.add("item-div");
            itemDiv.append(itemDesc,itemPrior);
            layout.appendChild(itemDiv);
        });
    }
    
}
export default function toDoLayout(project){    
    
    console.log(project)
    const layout=document.querySelector(".right-container");    
    const addToDo=document.createElement("button");
    layout.innerHTML="";
    
    addToDo.textContent="ADD TODO";
    let newToDo=modalToDo(addToDo);
    console.log(newToDo);
    
    layout.appendChild(addToDo);
    addToDo.addEventListener("click",function(){
        project.todos.push(addTask("HEHE","HIGH"));        
        displayToDos(layout,todos);
        console.log(todos)
    })
    
    let todos=project.todos;
    displayToDos(layout,todos);
    
}

