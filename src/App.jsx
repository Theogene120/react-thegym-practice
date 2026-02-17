
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

    function handleSubmision(formData) {
        console.log("Form submitted") // for checking
        const newIngredients = formData.get('ingredient') // We pass form name as string

        setIngredients(prevIngredients => [...prevIngredients, newIngredients])
    }
    return (
        <>
            <form action={handleSubmision} className="my-12 flex justify-center gap-5">
                <input  className="border-2 border-gray-300 rounded-md w-80 outline-none pl-3" placeholder="e.g. oregano" type="text" name="ingredient" id="1" />
                <button  className="bg-[#141413] text-white px-6 rounded-md h-8 text-sm font-semibold text-opacity-90">+ Add ingredient</button>
            </form>
            {ingredients.length == 0? '' : (<p className='font-bold text-2xl ml-10 pb-4'> Ingredients on hands: </p>)}
            <ul className="list-disc ml-20">{list}</ul>
            {ingredients.length == 0? '' : (
            <div className='flex justify-between items-center bg-gray-200 mt-10 m-6 py-4 px-8 rounded-lg'>
                <div>
                    <p className='font-bold'>Ready for a recipe?</p>
                    <p className='text-sm font-semibold opacity-50'>Generate the recipe from your list of ingredient</p>
                </div>
                <button className='bg-[#D17557] px-4 text-white font-bold text-sm rounded-lg h-9'>Get a recipe</button>
            </div>
        )}
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