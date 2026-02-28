import React from "react";

export default function Fetch(props){
    const [starData, setStarData] = React.useState(null)
    const [count, setCount] = React.useState(0)

    console.log('rendered')

    React.useEffect(() => {
        console.log('Effect rendered')
        fetch("https://swapi.dev/api/people/1")
        .then(response => response.json())
        .then(data => setStarData(data))
    }, [count])
    

    return(
        <>
            <p>count is : {count}</p>
            <button className="border border-black p-2 px-4 m-3" onClick={() => setCount(count+1)}>Add</button>
            <p>{JSON.stringify(starData, null, 2)}</p>
        </>
        
    )
}