import logo from '../images/logo.png';



export default (function(){
    const body=document.querySelector("body");
    const context=document.createElement("div");
    const header=document.createElement("header");
    const headerIMG=new Image();
    const mainContainer=document.createElement("div");
    const navContainer=document.createElement("div");
    const rightContainer=document.createElement("div");
    
    //basicModal(addProject);
    
    
   

    //textContent
   
    headerIMG.src=logo;
    //classes
    context.classList.add("context");
    header.classList.add("header");
    headerIMG.classList.add("header-img");
    mainContainer.classList.add("main-container");
    navContainer.classList.add("nav-container");
  
    rightContainer.classList.add("right-container");
    
    //appending
    body.appendChild(context);
    context.append(header,mainContainer);
    header.appendChild(headerIMG);
    mainContainer.append(navContainer,rightContainer);
    
    

})();