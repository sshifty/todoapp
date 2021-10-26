import modalToDo from '../style/modalToDo.css';

function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

const makeForm=(modalContent,close,modal)=>{
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
    let ok=false;

    //text
    createText.textContent="Create"
    labelLow.textContent="Low";
    labelMedium.textContent="Medium";
    labelHigh.textContent="High";
    dueDateText.textContent="Due Date";
    priorityText.textContent="Priority";
    addButton.textContent="Add";

    //attribute
    descText.setAttribute("maxLength",20);
    descText.setAttribute("placeholder","Title");
    descText.setAttribute("required","");
    detailsText.setAttribute("maxLength",70);
    detailsText.setAttribute("required",'');    
    detailsText.setAttribute("placeholder","Description");
    date.setAttribute("type","date");
    buttonLow.setAttribute("type","radio");
    buttonMedium.setAttribute("type","radio");
    buttonHigh.setAttribute("type","radio");
    addButton.setAttribute("type","submit");
    setAttributes(buttonLow,{
        "id":"create-new-Low",
        "name":"create-new-priority",
        "value":"low",
        "required":""

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
        "class":"create-priority create-low",

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
    let priority;
    form.onsubmit=function(event){
        event.preventDefault();
         priority= document.querySelector( 'input[name="create-new-priority"]:checked').value;           
        ok=true;
        console.log(ok)
        return true;  
       
    }
    console.log("im out")
    if(ok){
        return {
            descText,
            detailsText,
            date,
            priority
    
        }
    }
    
}

export default function getModal(btn){
    //create
    const modal=document.createElement("div");
    const modalContent=document.createElement("div");
    const close=document.createElement("span");
   
    const text=document.createElement("p");
    const body=document.querySelector("body");

    text.textContent="dsfdssfdfds";
    close.innerHTML="&times";


    //class
    modal.classList.add("modal");
    modalContent.classList.add("modal-content");
    close.classList.add("close");

    //append
    body.appendChild(modal);
    modal.appendChild(modalContent);
    let newObj=makeForm(modalContent,close,modal);
    console.log(newObj);

    btn.addEventListener("click", function () {
        modal.style.display = "block";
    })
    close.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    if(newObj) return newObj;
}