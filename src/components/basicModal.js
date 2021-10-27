export  default function basicModal(){

    
   
    //create
    const modal=document.createElement("div");
    const modalContent=document.createElement("div");
    const close=document.createElement("span");
   
    
    const body=document.querySelector("body");

    
    close.innerHTML="&times";


    //class
    modal.classList.add("modal");
    modalContent.classList.add("modal-content");
    close.classList.add("close"); 

    //append
    body.appendChild(modal);
    modal.appendChild(modalContent);   
    
   
    
    
    

    // btn.addEventListener("click", function () {
    //     modal.style.display = "block";
    // })
    close.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }    
}