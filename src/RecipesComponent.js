import checkMark from "./check-mark.png";

function RecipesComponent ({label, cuisineType, dishType, image, calories, ingredients}) {
    return (
        <div className="recipe">
                <h2 className="recipe-label">{label}</h2>
            <div className="recipe-description-container">
                <div className="recipe-type-container">
                    <h4 className="recipe-type">Cuisine type: {cuisineType}</h4>
                    <h4 className="recipe-type">Dish type: {dishType}</h4>
                </div>
                <h4 className="calories">{calories.toFixed()} calories</h4>
            </div>
            <img className="recipe-img" src={image} alt="Recipe"/>
            {ingredients.map((ingredient,index) => (
                <li key={index}>
                    <img className="check-mark" src={checkMark} alt="Check mark" width="20px"/>
                    {ingredient}
                </li>
            ))}
        </div>
    )
}

export default RecipesComponent;