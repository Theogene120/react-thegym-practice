import React from "react"

import Die from "./Die"

function Main(){

    const [nums, setNums] = React.useState([])

    React.useEffect(() => {
        let random = []
        for(let i = 1; i <= 10; i++){
            let n = Math.floor(Math.random() * 6) + 1
            random.push(n)
        }
        
        setNums(random)
    }, [0])
        
        

        let numbers = nums.map(num => <Die value={num} />)


    return (
        <div className="bg-[#0B2434] border rounded-lg h-[500px]">
            <div className="bg-white  h-[85%] rounded-md m-10">
                <p>Discription</p>
                <div className="flex justify-center mt-32">
                    <div className="grid grid-cols-5 gap-4">
                        {numbers}
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default function Tenzies(){
    return(
        <Main />
    )
}