
import { useEffect, useState } from 'react';
import video from './food.mp4';
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';


function App() {

  const MY_ID = "d6b75969";
  const MY_KEY = "e92d8a3bc796c01462f0177a937260bb";

  const [mySearch, setMySearch] = useState("");
const [myRecipes, setMyRecipes] = useState([]);
const [wordSubmitted, setWordSubmitted] = useState("lemon");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
    const data = await response.json();
    setMyRecipes(data.hits);
    console.log(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch =(e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
  }

  return (
    <div className="App">
    <div className="container">
    <video autoPlay muted loop>
     <source src={video} type="video/mp4" />
  </video>
    <h1>Find a Recipe</h1>
    </div>

    <div className='container'>
     <form onSubmit={finalSearch}>
         <input className='search' onChange={myRecipeSearch} value={mySearch}/>
    </form>
</div>

<div className='container'>
     <button onClick={finalSearch}>
         <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
      </button>
</div>

{myRecipes.map((element, index) => (
   <MyRecipesComponent key={index}
   label={element.recipe.label}
   cuisineType={element.recipe.cuisineType}
   image={element.recipe.image}
   calories={element.recipe.calories}
   ingredients={element.recipe.ingredientLines}
   description = {element.recipe.url}/>
))}
    </div>
  );
}

export default App;
