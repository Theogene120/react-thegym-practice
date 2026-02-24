import React from  'react'
import pads from "./pads"

function Pad(props){
    return (
    <button 
        style={{backgroundColor: props.color}}
        className='py-7 px-8 my-5 mx-8 '>
    </button>
)
}

export default function ButtonSeries(props) {
   
    let [button, setButton] = React.useState(pads)
    let btn = button.map(b => <Pad key={b.id} color={b.color}/> )
    return (
        <main>
            <div className="pad-container">
                {btn}
            </div>
        </main>
    )
}