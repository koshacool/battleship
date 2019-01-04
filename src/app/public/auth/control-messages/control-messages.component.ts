import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../validation.service';

const getControlErrorsMessage = (controlErrors: object): string => {
  let message = '';

  Object.keys(controlErrors).find(key => {
    message = ValidationService.getValidatorErrorMessage(key, controlErrors[key]);
    return !!message;
  });

  return message;
};


@Component({
  selector: 'app-control-messages',
  template: `<div *ngIf="errorMessage" class="ml1 text-danger">{{errorMessage}}</div>`
})
export class ControlMessagesComponent {
  @Input() control: FormControl;
  @Input() customErrors: FormControl;
  @Input() isFormSubmitted: boolean;

  get errorMessage() {
    if ((this.control.touched || this.isFormSubmitted) && this.control.errors) {
      const validationMessage = getControlErrorsMessage(this.control.errors);

      if (validationMessage) {
        return validationMessage;
      }
    }

    if (this.customErrors) {
      const customValidationMessage = getControlErrorsMessage(this.customErrors);

      if (customValidationMessage) {
        return customValidationMessage;
      }
    }

    return null;
  }
}
