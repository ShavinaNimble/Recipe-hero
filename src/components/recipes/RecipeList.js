import Recipe from './Recipe';

const RecipeList = ({ selectedIngredients, recipes }) => {
  const filteredRecipes = recipes.filter(item => item.ingredients.some(ingredient => selectedIngredients.indexOf(ingredient) >= 0));

  return (
    <ul className="recipes">
      {filteredRecipes.map(item => <Recipe key={item.name} {...item} />)}
    </ul>
  )
}

export default RecipeList;