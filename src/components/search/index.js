import Form from './Form';
import Ingredient from './Ingredient';

const Search = ({ ingredients, selectedIngredients, setSelectedIngredients }) => {
  return (
    <section className="ingredient-search">
      <h2>Search Recipes By Ingredient</h2>

      {ingredients.length > selectedIngredients.length
        ? (
          <Form
            ingredients={ingredients}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />)
        : <h3>All Ingredients Selected</h3>
      }

      {selectedIngredients.length > 0
        ? (
          <ul className="ingredients">
            {selectedIngredients.map(item => (
              <Ingredient
                key={item}
                name={item}
                selectedIngredients={selectedIngredients}
                setSelectedIngredients={setSelectedIngredients}
              />
            ))}
          </ul>)
        : null
      }

    </section>
  )
}

export default Search;