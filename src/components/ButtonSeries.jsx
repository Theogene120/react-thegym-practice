import React from  'react'
import pads from "./pads"

export default function ButtonSeries(props) {
   
    let [button, setButton] = React.useState(pads)
    let btn = button.map(b => <button 
        key={b.id}
        style={{backgroundColor: props.darkMode ? '#222222' : '#cccccc'}}
        className='py-5 px-8 border-2 border-sky-500 my-5 mx-8 bg-sky-200'>
            {b.id}
        </button>)
    return (
        <main>
            <div className="pad-container">
                {btn}
            </div>
        </main>
    )
}