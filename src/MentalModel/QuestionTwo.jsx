
import React from "react";

function Search() {
    const names = [
        "Alice",
        "Benjamin",
        "Clara",
        "David",
        "Elena",
        "Felix",
        "Grace",
        "Henry",
        "Isabella",
        "Jack",
        "Katherine",
        "Liam",
        "Maya",
        "Nathan",
        "Olivia",
        "Patrick",
        "Quinn",
        "Sophia",
        "Thomas",
        "Victoria"
    ];
    const [input, setInput] = React.useState('')
    
    let handleInput = React.useCallback((e) => {
        let inp = e.currentTarget.value
        setInput(inp)
    }, [])

    

    let requiredNames = React.useMemo(() =>{
        return names.filter(name => {
            if(input == ''){
                return name
            }else{
                return name.includes(input)
            }
        })
    })

    return(
        <div className="m-4">
            <input onChange={(e) => handleInput(e)} type="text" name="name" className="outline-none border border-black "/>
            {requiredNames.map(name => <p>{name}</p>)}
        </div>
    )
}

export default Search
