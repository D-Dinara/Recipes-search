import './App.css';
import { useEffect, useState } from 'react';
import RecipesComponent from './RecipesComponent';
import coverVideo from './food.mp4';

function App() {

  const API_ID = "d061d765";
  const API_KEY = "e0e0966fca905e4698108d991786ad88";

  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [product, setProduct] = useState('salmon');

  const changeSearchTerm = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${product}&app_id=${API_ID}&app_key=${API_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
    }
    getRecipe();
  }, [product])

  const finalSearch = (e) => {
    e.preventDefault();
    setProduct(searchTerm);
  }
  
  return (
    <div className="App">
      <video className='cover-video' muted autoPlay loop>
        <source src={coverVideo} type="video/mp4" />
      </video>
      <div className='container'>
        <div className='heading'>
          <h1> Find a recipe</h1>
        </div>
        <form onSubmit={finalSearch}>
          <input className='search' onChange={changeSearchTerm} placeholder="Search..." value={searchTerm}/>
          <button className='search-btn'>SEARCH</button>
        </form>
        <div className='recipes-container'>
          {recipes.map((item,index) => (
            <div key={index}>
              <RecipesComponent label={item.recipe.label} cuisineType={item.recipe.cuisineType} dishType={item.recipe.dishType} image={item.recipe.image} calories={item.recipe.calories} ingredients={item.recipe.ingredientLines} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
