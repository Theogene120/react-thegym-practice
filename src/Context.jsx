import { useContext, createContext } from "react";


const UseContext = createContext()

function Child1(){
    const {child1} = useContext(UseContext)
    return <p>I'm from {child1}</p>
}

function Child2(){
    const {child2} = useContext(UseContext)
    return <p>I'm from {child2}</p>
}

function Context(){
    return(
        <UseContext.Provider value={{child1: 'child one', child2: 'child two'}} >
            <Child1 />
            <Child2 />
        </UseContext.Provider>
    )
}


export default Context;