import { createElement} from "react"
import { useState } from "react";


const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];





function App(){
  let list = products.map( product => 
    <li id={product.id} style={{color: product.isFruit? "magenta": "darkgreen"}}>
      {product.title}
    </li>
  )
  const createdElement = createElement('h1', null, 'Hello from createElement method')
  console.log(createdElement)

  function handleClick(){
    alert('Thank you for subscribe')
    setIsSubscribed(true)
  }
  
  const [isSubscribed, setIsSubscribed] = useState(false)

  const [count, setCount] = useState(0)
  const [counter, setCounter] = useState(0)


  return (
    <>
      {createdElement}
      <ul>{list}</ul>
      <button onClick={handleClick}>Click to subscribe</button>
      {isSubscribed && (
        <>
          <h2>This names added by clicking</h2>
          <p>Peter</p>
          <p>John</p>
          <p>Jemus</p>
        </>
      )}
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
      <button onClick={() => setCounter(counter + 1)}>Clicked {counter} times</button>
    </>
  )
}

export default App
