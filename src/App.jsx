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

function Header() {
  return(
    <div className="flex gap-1 justify-center p-4 bg-[#F55A5A] text-white rounded-t-md">
      <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></p>
      <p className="text-sm">my travel journal.</p>
    </div>
  )
}

function Entry(props){

    return(
        <div className="flex mx-10 gap-5 my-5">
            <div className="overflow-hidden">
                <img className="w-96 h-full rounded-[5px]" src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="">
                <p className="text-[13px] font-semibold">{props.country}<span className="ml-4 underline hover:cursor-pointer">View on Google Maps</span></p>
                <p className="font-bold text-2xl">{props.place}</p>
                <p className="font-bold my-3">{props.date}</p>
                <p className="text-[13px] font-semibold">{props.discriptions}</p>
            </div>
        </div>
    )
}

function App() {
  return (
    <>
        <Header />
        <Entry 
            img = {{
                src: "https://scrimba.com/links/travel-journal-japan-image-url",
                alt: "Mount Fuji"
            }}
            country = 'JAPAN'
            place = 'Mount Fuji'
            date = "12 Jan, 2021 - 24 Jan, 2021"
            discriptions = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />
    </>
    
  )
}
export default App
