import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MinimalRowStepsProps } from '@app/features/onboarding/models/mobile-steps.model';
import { NgClass, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-mobile-steps',
  standalone: true,
  imports: [NgClass, NgIf, NgForOf],
  templateUrl: './mobile-steps.component.html',
  styleUrl: './mobile-steps.component.scss',
})
export class StepperComponent implements OnInit, MinimalRowStepsProps {
  @Input() label: string | undefined;
  @Input() stepsCount = 3;
  @Input() color: string | undefined;
  @Input() currentStep: number | undefined;
  @Input() defaultStep = 0;
  @Input() hideProgressBars = false;
  @Input() className: string | undefined;
  @Input() stepClassName: string | undefined;
  @Output() stepChange = new EventEmitter<number>();

  steps: number[] = [];
  currentStepInternal!: number;

  ngOnInit(): void {
    this.currentStepInternal = this.currentStep ?? this.defaultStep;
    this.steps = Array.from({ length: this.stepsCount }, (_, i) => i);
  }

  setCurrentStep(step: number): void {
    this.currentStepInternal = step;
    this.stepChange.emit(step);
  }

  getStatus(stepIdx: number): string {
    if (this.currentStepInternal === stepIdx) {
      return 'active';
    } else if (this.currentStepInternal < stepIdx) {
      return 'inactive';
    } else {
      return 'complete';
    }
  }
}
