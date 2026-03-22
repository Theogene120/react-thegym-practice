import React from "react";

function MentalModel(){
    const [text, setText] = React.useState('')
    const condition = [
        {label : 'At least 8 characters', isChecked: text.length >= 8},
        {label : 'Contain uppercase character', isChecked: text.split('').some(v => v >= 'A' && v <= 'Z')},
        {label : 'Contain lowercase character', isChecked: text.split('').some(v => v >= 'a' && v <= 'z')},
        {label : 'Contain a digit', isChecked: text.split('').some(v => !isNaN(v))},
        {label : 'Contain a special character', isChecked: text.split('').some(ch => 
            !( (ch >= 'a' && ch <= 'z') ||
                (ch >= 'A' && ch <= 'Z') ||
                (ch >= '0' && ch <= '9') )
        )}
    ]

    const [show, setShow] = React.useState(false)

    function handleShow(){
        setShow(prev => !prev)
    }

    

    function handleChanges(e){
        let text = e.target.value
        setText(text)
    }
    

    return(
        <div>
            <div className="m-4 border border-black w-80 flex rounded-md">
                <input onChange={(e) => handleChanges(e)} className="outline-none pl-1 w-full rounded-md" placeholder="Enter Strong Password" type={show ? 'text' : 'password'} />
                <button onClick={handleShow}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg></button>
            </div>
            <div>
                {condition.map(box => 
                <div className="m-4">
                <input type="checkbox" checked={box.isChecked} name={box.name} />
                <label className="mx-2">{box.label}</label> 
                <br />
                </div>
            )}
            </div>
        </div>
    )
}

export default MentalModel;