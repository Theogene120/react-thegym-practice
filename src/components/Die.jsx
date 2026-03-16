

function Die(props){

    return <button 
    onClick={props.onClick} 
    className={`border  px-8 py-2 rounded-md font-bold text-2xl shadow-xl  ${props.isHeld ? 'bg-[#59E391]' : 'bg-gray-200'}`}>
        {props.value}
    </button>
}

export default Die