const Step = ({description, image, stepNumber}) => {
  return (
    <div className="recipe-step">
      <p>{description}</p>
      <img src={`/images/${image}`} alt={`Step ${stepNumber}`} />
    </div>
  )
}

export default Step;