import React from "react"

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
    const [meme, setMeme] = React.useState({
        topText: 'One does not simply',
        bottomText: 'Walk into Mordor',
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [memeUrls, setMemeUrls] = React.useState([])
    const [count, setCount] = React.useState(0)

    function handlerChange(e){
        const {value, name} = e.currentTarget
        setMeme(prev => {
            return {...prev, [name]: value}
        })
    }

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(meme => {
                
                let arr = []
                for (let obj of meme.data.memes){
                    arr.push(obj.url)
                }
                setMemeUrls(arr)
            })
            
    }, [])

    function handlerClick(){
        let idx = Math.floor(Math.random() * memeUrls.length)
        setMeme(prev => ({...prev, imageUrl: memeUrls[idx]}))
    }

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
                            onChange={handlerChange}
                        />
                    </label>

                    <label className="flex flex-col w-full px-10  py-4 text-sm gap-1 font-semibold"><span>Bottom Text</span>
                        <input
                            className="font-normal rounded-md outline-none border-2 border-gray-300 pl-1 h-8 "
                            type="text"
                            placeholder="Walk into Mordor"
                            name="bottomText"
                            onChange={handlerChange}
                        />
                    </label>
                </div>
                <button onClick={handlerClick}  className=" mr-20 w-[555px] mx-10 mb-6 py-2 rounded-md text-white text-sm font-semibold bg-gradient-to-r from-[#682281] to-[#A526D1]">Get a new meme image 🖼</button>
            </div>
            <div className="relative flex justify-center my-6 items-center">
                <img className="rounded-lg" src={meme. imageUrl} />
                <span className="absolute top-4 text-4xl font-extrabold text-white">{meme.topText}</span>
                <span className="absolute bottom-0 mb-20 text-4xl font-extrabold text-white">{meme.bottomText}</span>
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