import {projects} from './projects';

function saveProjectsToLocal(newItem){    
    myLibrary=JSON.parse(localStorage.getItem('localBooks'));
    myLibrary.push(newItem);
    window.localStorage.setItem('localBooks',JSON.stringify(myLibrary));
      
}
function searchLocalProject(){
    if(window.localStorage.getItem('localBooks')){
        myLibrary=JSON.parse(localStorage.getItem('localBooks'));
        listBooks();
    }
}