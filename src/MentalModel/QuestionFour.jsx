import { useReducer } from "react";

function reducer(state, action){
    switch(action.type){
        case 'increment': return {count: state.count + 1}
        case 'decrement': return {count: state.count - 1}
        case 'reset': return {count: 0}
        default: 'Unknown Error'
    }
}

function Counter(){
    const [state, dispatch] = useReducer(reducer, {count: 0})

    return(
        <div>
            <p>Count: {state.count}</p>
            <div className="flex gap-5">
                <button onClick={() => dispatch({type: 'increment'})}>+</button>
                <button onClick={() => dispatch({type: 'decrement'})}>-</button>
                <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            </div>
        </div>
    )
}

export default Counter