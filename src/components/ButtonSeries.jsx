import React from  'react'
import pads from "./pads"

function Pad(props){

    let [isOn, setIsOn] = React.useState(props.on)

    return (
    <button 
        onClick={() => props.toggle(props.id)}
        style={{backgroundColor: props.color}}
        className={`py-9 px-10 my-5 mx-8  rounded-md ${props.on ? 'opacity-100': 'opacity-30'}`}>
    </button>
)
}

export default function ButtonSeries() {

    let [button, setButton] = React.useState(pads)

    function handler(id){
        console.log(id)
        setButton(prev => prev.map(item => {
            return item.id == id ? {...item, on: !item.on} : item
        }))

    }
   
    
    
    let btn = button.map(b => <Pad toggle={handler} id={b.id}  key={b.id} color={b.color} on={b.on}/> )
    return (
        <main>
            <div className="pad-container">
                {btn}
            </div>
        </main>
    )
}