
export const projects = [
    {
        name: "General",
        todos: [
            {
                desc: "Cook Dinner",
                prior: "high",
            },
            {
                desc: "Cook Dinner",
                prior: "high",
            },
            {
                desc: "Cook Dinner",
                prior: "high",
            },
        ]
    },
    {
        name: "Gym",
        todos: [{
            desc: "exercise",
            prior: "high"
        }]
    },
    {
        name: "Study",
        todos: [{
            desc: "studyyy",
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
