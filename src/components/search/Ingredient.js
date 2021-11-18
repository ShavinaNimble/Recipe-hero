import Icon from '../global/Icon';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const Ingredient = ({ name, selectedIngredients, setSelectedIngredients }) => {
  const removeIngredient = (e) => {
    const text = e.target.closest('.recipe-ingredient').textContent;
    const index = selectedIngredients.indexOf(text);
    let newSelectedInggredients = [...selectedIngredients];

    if (index !== -1) {
      newSelectedInggredients.splice(index, 1);
      setSelectedIngredients(newSelectedInggredients);
    }
  };

  return (
    <li
      className="recipe-ingredient"
      onClick={removeIngredient}
      role="button"
    >
      <span>{name}</span>
      <Icon icon={faMinusCircle} />
    </li>
  )
}

export default Ingredient;