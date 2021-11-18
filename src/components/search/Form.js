import Icon from '../global/Icon';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Form = ({ ingredients, selectedIngredients, setSelectedIngredients }) => {
  const addIngredient = (ingredient) => {
    setSelectedIngredients([...selectedIngredients, ingredient])
  };

  return (
    <form className="ingredient-picker">
      <select placeholder="Add an ingredient" onChange={(e) => addIngredient(e.target.value)}>
        <option disabled="">Pick an ingredient</option>
        {
          ingredients.map(item => {
            const option = selectedIngredients.indexOf(item) < 0
              ? <option key={item} value={item}>{item}</option>
              : null;
            return option;
          })
        }
      </select>
      <button>
        <Icon icon={faPlus} />
      </button>
    </form>

  )
}

export default Form;