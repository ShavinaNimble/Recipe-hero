const StepIndecator = ({ steps, currentStep, setCurrentStep }) => {
  return (
    <ul className="recipe-step-indicator">
      {
        steps.map(({ stepNumber }) => (
          <li
            key={stepNumber}
            className={currentStep === stepNumber ? 'active' : null}
            onClick={currentStep !== stepNumber ? () => setCurrentStep(stepNumber) : null}
            role="button"
          >
            {stepNumber}
          </li>
        ))
      }
    </ul>
  );
}

export default StepIndecator;