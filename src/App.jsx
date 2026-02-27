
import trollFace from "/troll-face.png"
function Header() {
        return (
            <header className=" flex items-center gap-3 pl-10 py-4 bg-gradient-to-r from-[#682281] to-[#A526D1]">
                <img  className="h-6"
                    src={trollFace} 
                />
                <h1 className="text-lg font-semibold text-white">Meme Generator</h1>
            </header>
        )
    }


function Main() {
    return (
        <main>
            <div className="">
                <div className="flex justify-evenly ">
                    <label className="flex flex-col  w-full px-10  py-4 text-sm gap-1 font-semibold"><span>Top Text</span>
                        <input
                            className="font-normal rounded-md outline-none border-2 border-gray-300 pl-1 h-8 "
                            type="text"
                            placeholder="One does not simply"
                            name="topText"
                        />
                    </label>

                    <label className="flex flex-col w-full px-10  py-4 text-sm gap-1 font-semibold"><span>Bottom Text</span>
                        <input
                            className="font-normal rounded-md outline-none border-2 border-gray-300 pl-1 h-8 "
                            type="text"
                            placeholder="Walk into Mordor"
                            name="bottomText"
                        />
                    </label>
                </div>
                <button className=" mr-20 w-[555px] mx-10 mb-6 py-2 rounded-md text-white text-sm font-semibold bg-gradient-to-r from-[#682281] to-[#A526D1]">Get a new meme image 🖼</button>
            </div>
            <div className="flex flex-col items-center">
                <img className="rounded-lg" src="http://i.imgflip.com/1bij.jpg" />
                <span className="-mt-80 text-4xl font-extrabold text-white">One does not simply</span>
                <span className="mt-52 mb-20 text-4xl font-extrabold text-white">Walk into Mordor</span>
            </div>
        </main>
    )
}


function App(){
    return (
        <>
            <Header />
            <Main />
        </> 
    )
}

export default App