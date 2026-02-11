import { createElement} from "react"
import { useState } from "react";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import Footer from "./components/Footer";

// function App(){
//   return(
//   <>
//     <Header />
//     <Body />
//     <Footer />
//   </>
//   )
// }

// function Header() {
//   return(
//     <div className="flex gap-1 justify-center p-4 bg-[#F55A5A] text-white rounded-t-md">
//       <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></p>
//       <p className="text-sm">my travel journal.</p>
//     </div>
//   )
// }

// function App() {
//   return (
//     <Header />
//   )
// }
// export default App

import Joke from "./Joke"

let joke = [
    {
        setup: "I got my daughter a fridge for her birthday.",
        punchline: "I can't wait to see her face light up when she opens it."
    },
    {
        setup:"How did the hacker escape the police?",
        punchline:"He just ransomware!"
    },
    {
        setup:"Why don't pirates travel on mountain roads?",
        punchline:"Scurvy."
    },
    {
        setup:"Why do bees stay in the hive in the winter?",
        punchline:"Swarm."
    },
    {
        setup:"What's the best thing about Switzerland?",
        punchline : "I don't know, but the flag is a big plus!"
    }
]

export default function App() {
    return (
        <main>
            {joke.map(v => <Joke setup = {v.setup} punchline = {v.punchline} />)}
        </main>
    )
}
