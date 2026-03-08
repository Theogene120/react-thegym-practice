

function Button(){
    let buttons = ['AC','+/-','%','/','7','8','9','X','4','5','6','-','1','2','3','+','0','.','=']
    let sign = ['/','X','-','+','=']

    let btns = buttons.map(btn => 
        <div className={`${btn == '0'? 'grid col-span-2' : ''}`}>
            <button className={`${sign.includes(btn) ? "bg-[#F38636] text-white text-3xl font-bold": "bg-gray-100 text-3xl font-bold"} w-full py-12 `}>
                {btn}
            </button>
        </div>
    )
    
    return (
        <div>
            <p className="h-20 text-6xl flex items-center justify-end text-white">0</p>
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

