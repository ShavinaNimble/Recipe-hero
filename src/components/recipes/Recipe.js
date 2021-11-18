import { useState } from 'react';

import StepIndecator from './StepIndecator';
import Step from './Step';
import StepControls from './StepControls';

const Recipe = ({
  name,
  description,
  imageUrl,
  ingredients,
  steps
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const maxSteps = steps.length;

  return (
    <li>
      <div className="recipe-card">
        <h2>{name}</h2>
        <div className="recipe-description">
          <img src={`images/${imageUrl}`} />
          <p>{description}</p>
        </div>
        <StepIndecator
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        <Step
          stepNumber={currentStep}
          description={steps[currentStep - 1].description}
          image={steps[currentStep - 1].imageUrl}
        />
        <StepControls
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          maxSteps={maxSteps}
        />
      </div>
    </li>
  )
}

export default Recipe;