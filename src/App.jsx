
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
    const [recipeShown, setRecipeShown] = React.useState(false)
    
    const list = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmision(formData) {
        console.log("Form submitted") // for checking
        const newIngredients = formData.get('ingredient') // We pass form name as string

        setIngredients(prevIngredients => [...prevIngredients, newIngredients])
    }

    function showRecipe(){
        setRecipeShown(prev => !prev)
    }
    return (
        <>
            <form action={handleSubmision} className="my-12 flex justify-center gap-5">
                <input  className="border-2 border-gray-300 rounded-md w-80 outline-none pl-3" placeholder="e.g. oregano" type="text" name="ingredient" id="1" />
                <button  className="bg-[#141413] text-white px-6 rounded-md h-8 text-sm font-semibold text-opacity-90">+ Add ingredient</button>
            </form>
            {ingredients.length == 0? '' : (<p className='font-bold text-2xl ml-10 pb-4'> Ingredients on hands: </p>)}
            <ul className="list-disc ml-20">{list}</ul>
            {ingredients.length <= 3? '' : (
            <div className='flex justify-between items-center bg-gray-200 mt-10 m-6 py-4 px-8 rounded-lg'>
                <div>
                    <p className='font-bold'>Ready for a recipe?</p>
                    <p className='text-sm font-semibold opacity-50'>Generate the recipe from your list of ingredient</p>
                </div>
                <button onClick={showRecipe} className='bg-[#D17557] px-4 text-white font-bold text-sm rounded-lg h-9'>Get a recipe</button>
            </div>
        )}
        {recipeShown && <div className='p-6'>
            <h2 className='text-2xl font-bold mb-4'>Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
            <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
            <h3>Beef Bolognese Pasta</h3>
            <p className='pt-4'><strong >Ingredients:</strong></p>
            <ul className='list-disc ml-12 py-4'>
                <li>1 lb. ground beef</li>
                <li>1 onion, diced</li>
                <li>3 cloves garlic, minced</li>
                <li>2 tablespoons tomato paste</li>
                <li>1 (28 oz) can crushed tomatoes</li>
                <li>1 cup beef broth</li>
                <li>1 teaspoon dried oregano</li>
                <li>1 teaspoon dried basil</li>
                <li>Salt and pepper to taste</li>
                <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
            </ul>
            <p className='pt-4'><strong>Instructions:</strong></p>
            <ol className='py-4 list-disc ml-12'>
                <li>Bring a large pot of salted water to a boil for the pasta.</li>
                <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
                <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
                <li>Stir in the tomato paste and cook for 1 minute.</li>
                <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
                <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
                <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
                <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
                <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
            </ol>
            </article>
        </div>}
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