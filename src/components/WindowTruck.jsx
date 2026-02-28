import React from 'react'

function Width(){
    const [width, setWidth] = React.useState(window.innerWidth)

    React.useEffect(() =>{
        function truckwidth(){
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', truckwidth)
        return () => {
            window.removeEventListener('resize', truckwidth)
        }
    }, [])
    return(
    <p className='m-4 font-bold text-xl'>Window Width: {width}</p>
)
}



export default function WindowTracker() {

    const [show, setShow] = React.useState(true)
    
    function toggle() {
        setShow(prevShow => !prevShow)
    }

    return (
        <main className="container">
            <button className='m-4 p-2 bg-fuchsia-600 rounded-md text-white font-semibold' onClick={toggle}>
                Toggle WindowTracker
            </button>
            {show && <Width />}
        </main>
    )
}