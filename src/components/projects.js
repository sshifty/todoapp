
export let projects = [
    {
        name: "General",
        todos: [
            {
                desc: "Cook Dinner",
                detail:"Make Chicken",
                date:"2021-01-12",
                prior: "high",
            },            
        ]
    },
    {
        name: "Gym",
        todos: [{
            desc: "exercise",
            detail:"Push day",
            date:"2021-10-28",
            prior: "high"
        }]
    },
    {
        name: "Study",
        todos: [{
            desc: "studyyy",
            detail:"Programming ",
            date:"2021-10-28",
            prior: "high"
        }]
    },
]

export  const makeProject=name=>{       
        return {
             name,
             todos:[]             
        }
        
};

export function searchLocalProject(){
     
    if(window.localStorage.getItem('todoProjects')){
        projects=JSON.parse(localStorage.getItem('todoProjects'));
        console.log(projects)
    }else{
        window.localStorage.setItem('todoProjects',JSON.stringify(projects));
    }
    return projects;
};

