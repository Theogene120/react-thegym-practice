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
    <head>
      <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></p>
    </head>
  )
}

function App() {
  return (
    <header />
  )
}
export default App
