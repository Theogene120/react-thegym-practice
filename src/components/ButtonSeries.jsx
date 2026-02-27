import React from  'react'
import pads from "./pads"

function Pad(props){

    let [isOn, setIsOn] = React.useState(props.on)

    


    return (
    <button 
        onClick={() => props.toggle(props.id)}
        style={{backgroundColor: props.color}}
        className={`py-9 px-10 my-5 mx-8  rounded-md ${isOn ? 'opacity-100': 'opacity-30'}`}>
    </button>
)
}

export default function ButtonSeries() {

    function handler(id){
        console.log(id)
    }
   
    let [button, setButton] = React.useState(pads)
    
    let btn = button.map(b => <Pad toggle={handler} id={b.id}  key={b.id} color={b.color} on={b.on}/> )
    return (
        <main>
            <div className="pad-container">
                {btn}
            </div>
        </main>
    )
}