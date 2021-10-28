
import { displayToDos } from './toDoLayout';
import { searchLocalProject } from './projects';

export const displayHome=()=>{
    const layout=document.querySelector(".right-container"); 
    let projects=searchLocalProject();     
    let homeContainer=[];    
    layout.innerHTML="";
    projects.map(proj=>{
       // console.log(proj.todos)
       //searchLocalProject();
        proj.todos.map(todo=>{
            homeContainer.push(todo);
        });              
        
    });
    
    homeContainer.sort((a,b)=>{
        let dateA=new Date(a.date);
        let dateB=new Date(b.date);
        if(dateA>dateB){
            return 1;
        }
        if(dateA<dateB){
            return -1;
        }
        return 0;

    })   
    displayToDos(layout,homeContainer);

}