import React from "react"
import Confetti from 'react-confetti';

import Die from "./Die"

function Main(){

    const [nums, setNums] = React.useState(randomNumbers())
    
    let completed = nums.every(obj => obj.isHeld) && nums.every(die => die.value === nums[0].value)
    

    function randomNumbers() {
        let random = []
        for(let i = 1; i <= 10; i++){
            let n = Math.floor(Math.random() * 6) + 1
            random.push({value: n, isHeld: false, id: i})
        }
        
        return random
    }

    function hold(id){
        console.log(id)
        setNums(prev => 
            prev.map(die => die.id == id ? {...die, isHeld: !die.isHeld}: die)
        )
    }

    // General formula of generating random number in a give range()

    // Math.floor(Math.random() * (max - min + 1)) + min

    let numbers = nums.map(numObj => <Die onClick={() => hold(numObj.id)} key={numObj.id} value={numObj.value} isHeld={numObj.isHeld} />)

    function handleClick (){
        if(!completed){
            setNums(prev => prev.map(die => die.isHeld ? die : {...die, value: Math.floor(Math.random() * 6) + 1}))
        }else{
            setNums(randomNumbers())
        }
    }



    return (
        <div className="bg-[#0B2434] border rounded-lg h-[600px]">
            {completed && <Confetti />}
            <div className="bg-white  h-[85%] rounded-md m-10">
                {!completed ? (<div>
                    <p className="text-center text-4xl pt-10 font-bold">Tenzies</p>
                    <p className="px-20 text-center pt-10 font-semibold opacity-80">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                </div>) : (<p className="pt-20 text-center text-4xl font-extrabold">Congratulations 🥳🎉🎊</p>)}
                <div className="flex justify-center mt-24">
                    <div className="grid grid-cols-5 gap-4">
                        {numbers}
                    </div>
                </div>
                <div className="flex justify-center items-center mt-10"><button onClick={handleClick } className="bg-[#5035FF] text-white outline-none py-2 px-10 text-xl font-bold rounded-md shadow-2xl"> {completed? "New Game" : "Roll"} </button></div>
            </div>
        </div>
    
    )
}

export default function Tenzies(){
    return(
        <Main />
    )
}