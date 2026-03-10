import React from "react"

function Button(){
    let buttons = ['AC','+/-','%','/','7','8','9','X','4','5','6','-','1','2','3','+','0','.','=']
    let operators = ['/','X','-','+','AC', '%',]
    let sign = ['/','X','-','+',]


    const [num, setNum] = React.useState(0)
    const [operator, setOperator] = React.useState(null)
    const [prevNum, setprevNum] = React.useState(null)

    let btns = buttons.map((btn,idx) => 
        <div key={idx} className={`${btn == '0'? 'grid col-span-2' : ''}`}>
            <button onClick={() => handleClick(btn)} className={`${sign.includes(btn) || btn === "=" ? "bg-[#F38636] text-white text-3xl font-bold": "bg-gray-100 text-3xl font-bold"} w-full py-12 `}>
                {btn}
            </button>
        </div>
    )

    function handleClick(value){

        if (!isNaN(value)) {
        setNum(prev => {
            if (prev === 0) return Number(value)
            else return Number(`${prev}${value}`)
        })
        }
        else if(sign.includes(value)){
            setprevNum(num)
            setOperator(value)
            setNum(0)
        }

        else if(value === '='){
            if(operator === '+'){
                setNum(Number(prevNum) + Number(num))
            }
        }
        else if(value === 'AC'){
            setNum(0)
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

