export interface MinimalRowStepsProps {
  label?: string;
  stepsCount?: number;
  color?: string;
  currentStep?: number;
  defaultStep?: number;
  hideProgressBars?: boolean;
  className?: string;
  stepClassName?: string;
  onStepChange?: (stepIndex: number) => void;
}
