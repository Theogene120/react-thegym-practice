import React from  'react'
import pads from "./pads"

function Pad(props){
    return (
    <button 
        style={{backgroundColor: props.color}}
        className={`py-9 px-10 my-5 mx-8  rounded-md ${props.on ? 'opacity-100': 'opacity-30'}`}>
    </button>
)
}

export default function ButtonSeries(props) {

    
   
    let [button, setButton] = React.useState(pads)
    
    let btn = button.map(b => <Pad key={b.id} color={b.color} on={b.on}/> )
    return (
        <main>
            <div className="pad-container">
                {btn}
            </div>
        </main>
    )
}