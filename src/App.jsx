
import React from 'react'

function Header() {
  return(
    <div className="flex gap-1 justify-center items-center p-5 border rounded-t-md bg-white">
      <img className="w-7" src="chef-claude-icon.png" alt="log" />
      <p className="text-lg font-semibold">Chef Claude</p>
    </div>
  )
}

function Main() {
    const [ingredients, setIngredients] = React.useState([])
    
    const list = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmision(e) {
        e.preventDefault()
        console.log("Form submitted")
        const formData = new FormData(e.currentTarget)
        const newIngredients = formData.get('ingredient') // We pass form name as string

        setIngredients(prevIngredients => [...prevIngredients, newIngredients])
    }
    return (
        <>
            <form onSubmit={handleSubmision} className="my-12 flex justify-center gap-5">
                <input className="border-2 border-gray-300 rounded-md w-80 outline-none pl-3" placeholder="e.g. oregano" type="text" name="ingredient" id="1" />
                <button  className="bg-[#141413] text-white px-6 rounded-md h-8 text-sm font-semibold text-opacity-90">+ Add ingredient</button>
            </form>
            <ul className="list-disc ml-20">{list}</ul>
        </>
    )
}

function App() {
    
    return (
        <>
            <Header />
            <Main />
        </>
    
)
}

export default App