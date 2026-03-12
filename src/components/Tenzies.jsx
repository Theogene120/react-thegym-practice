import Die from "./Die"

function Main(){
    return (
        <div className="bg-[#0B2434] border rounded-lg h-[500px]">
            <div className="bg-white  h-[85%] rounded-md m-10">
                <p>Discription</p>
                <div className="flex justify-center mt-32">
                    <div className="grid grid-cols-5 gap-4">
                        <Die value={1}/>
                        <Die value={1}/>
                        <Die value={1}/>
                        <Die value={1}/>
                        <Die value={1}/>
                        <Die value={1}/>
                        <Die value={1}/>
                        <Die value={1}/>
                        <Die value={1}/>
                        <Die value={1}/>
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