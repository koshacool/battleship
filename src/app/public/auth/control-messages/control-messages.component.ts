import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-control-messages',
  template: `<div *ngIf="errorMessage" class="ml1 text-danger">{{errorMessage}}</div>`
})
export class ControlMessagesComponent {
  @Input() control: FormControl;
  @Input() customErrors: FormControl;
  @Input() isFormSubmitted: boolean;

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.touched || this.isFormSubmitted) {
        return ValidationService
          .getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    if (this.customErrors) {
      for (const propertyName in this.customErrors) {
        return ValidationService
          .getValidatorErrorMessage(propertyName, this.customErrors[propertyName]);
      }
    }

    return null;
  }
}
