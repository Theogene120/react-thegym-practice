import React from "react"

import Die from "./Die"

function Main(){

    const [nums, setNums] = React.useState(randomNumbers())

    function randomNumbers() {
        let random = []
        for(let i = 1; i <= 10; i++){
            let n = Math.floor(Math.random() * 6) + 1
            random.push({value: n, isHeld: false, id: i})
        }
        
        return random
    }

    // General formula of generating random number in a give range()

    // Math.floor(Math.random() * (max - min + 1)) + min

    let numbers = nums.map(numObj => <Die key={numObj.id} value={numObj.value} />)

    function handleClick(){
        setNums(randomNumbers())
    }


    // return (
    //     <div className="bg-[#0B2434] border rounded-lg h-[500px]">
    //         <div className="bg-white  h-[85%] rounded-md m-10">
    //             <p>Discription</p>
    //             <div className="flex justify-center mt-32">
    //                 <div className="grid grid-cols-5 gap-4">
    //                     {numbers}
    //                 </div>
    //             </div>
    //             <div className="flex justify-center items-center mt-10"><button onClick={handleClick} className="bg-[#5035FF] text-white outline-none py-2 px-10 text-xl font-bold rounded-md shadow-2xl">Roll</button></div>
    //         </div>
    //     </div>
    
    // )
}

export default function Tenzies(){
    return(
        <Main />
    )
}