import React from "react"

function Button(){
    let buttons = ['AC','+/-','%','/','7','8','9','X','4','5','6','-','1','2','3','+','0','.','=']
    let operators = ['/','X','-','+','AC', '%','=']
    let sign = ['/','X','-','+','=']


    const [num, setNum] = React.useState(0)
    const [operator, setOperator] = React.useState(null)
    const [secondNum, setSecondNum] = React.useState(null)

    let btns = buttons.map((btn,idx) => 
        <div key={idx} className={`${btn == '0'? 'grid col-span-2' : ''}`}>
            <button onClick={() => handleClick(btn)} className={`${sign.includes(btn) ? "bg-[#F38636] text-white text-3xl font-bold": "bg-gray-100 text-3xl font-bold"} w-full py-12 `}>
                {btn}
            </button>
        </div>
    )

    function handleClick(value){

        setNum(prev => {
        if(isNaN(value)){
            return prev
        }else {
            if(prev === 0){
                return value
            }else{
                let newnum = `${prev}${value}`
                return Number(newnum)
            }   
        }
        })

        setOperator(() => {
            if(operators.includes(value))
                return value
        })

        setSecondNum(() =>{
            if(operator != null){
                return value
            }
        })
        setNum(secondNum)
        
        if(operator === '+'){
            setNum(num + secondNum)
        }
    }
    
    return (
        <div>
            <p className="h-20 text-6xl flex items-center justify-end text-white">{num}</p>
            <div className="grid grid-cols-4 gap-[1px]">
                {btns} 
            </div> 
        </div> 
    )
}

function Calculator(){
    return(
        <div className="bg-[#7A7B88]">
            <Button />
        </div>
        
    )
}

export default Calculator

