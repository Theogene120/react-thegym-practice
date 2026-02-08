import { createElement} from "react"
import { useState } from "react";

/**
Challenge: 

Part 2: 
- Add a `<header>` element with an `<img />` element with the image of the 
  React logo inside (src="react-logo.png") and make sure to set the 
  width to something more manageable so it doesn't take up the whole screen.
  Also, as always, you should include some alt text on the image.
- Add an `<h1>` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list, then wrap
  the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
  structure flowing well.
- Add a `<footer>` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

function Header(){
  return <img src="nosource/like/this/one" alt="reat log" width='40px' />
}
function Body(){
  return(
    <ol>
      <li>Web development willingness</li>
      <li>It popular library</li>
      <li>It's maketable</li>
    </ol>
  )
}
function Footer(){
  return <p><small>&copy 2026 Theogene development. All rights resered</small></p>
}

function App(){
  return(
  <>
    <Header />
    <Body />
    <Footer />
  </>
  )
}

export default App
