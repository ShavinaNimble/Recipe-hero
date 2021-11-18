import "./App.css";

import { useState, useEffect } from "react";
import Header from './components/header';
import Search from './components/search';
import RecipeList from './components/recipes/RecipeList';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/recipes.json")
      .then(response => response.json())
      .then(data => {
        setError(false);

        const recipes = data.recipes;
        setRecipes(recipes);  

        const allIngredients = [];
        recipes.forEach(item => allIngredients.push(...item.ingredients));
        const ingredients = [...new Set(allIngredients)];
        setIngredients(ingredients);     

      }).catch(error => setError(true));
  }, []);

  return (
    <div id="the-app">
      <Header />
      <main>
        {
          recipes.length > 0 && ingredients.length > 0
            ? (
              <>
                <Search
                  ingredients={ingredients}
                  selectedIngredients={selectedIngredients}
                  setSelectedIngredients={setSelectedIngredients}
                />
                {
                  selectedIngredients.length > 0
                    ? <RecipeList selectedIngredients={selectedIngredients} recipes={recipes} />
                    : <span>Select an ingredient to see recipes</span>
                }
              </>
            )
            : !error
              ? <span>Loading...</span>
              : null
        }
        {
          error
            ? <span>There was a problem loading this Recipes.</span>
            : null
        }
      </main>
    </div>
  );
}

export default App
