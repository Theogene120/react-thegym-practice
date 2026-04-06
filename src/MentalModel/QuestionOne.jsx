import React from "react";

function Login(){
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isGood, setIsGood] = React.useState(false)
    const [show, setShow] = React.useState(false)
    function handlePassword(e) {
        let password = e.currentTarget.value
        setPassword(password)
        if(password.length >= 6){
            setIsGood(false)
        }
        else{
            setIsGood(true)
        }
    }
    function handleEmail(e) {
        setEmail(e.currentTarget.value)
    }
    function handleShow() {
        setShow(prev => !prev)
    }

    return(
        <>
            <form className="flex flex-col gap-6 px-6 mt-4">
                <input onChange={(e) => handleEmail(e)} type="text" value={email} name="email" placeholder="Enter email" className="px-2 outline-none border border-black"/>
                <input onChange={(e) => handlePassword(e)} type={show ? 'text': 'password'} value={password} name="password" placeholder="Enter password" className="px-6 outline-none border border-black" />
            </form>
            {isGood && <p className="text-red-600 text-center text-sm ">Password must be at least 6 characters</p>}
            <button onClick={handleShow} className="border border-black p-2 m-6">Show Password</button>
        </>
    )
}

export default Login