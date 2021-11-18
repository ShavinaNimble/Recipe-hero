const StepControls = ({ currentStep, setCurrentStep, maxSteps }) => {
  return (
    <div className="command-bar">
      {currentStep === 1
        ? <span></span>
        : <button onClick={() => setCurrentStep(currentStep - 1)}>Previous</button>
      }
      {currentStep === maxSteps
        ? <span></span>
        : <button onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
      }
    </div>
  );
}

export default StepControls;