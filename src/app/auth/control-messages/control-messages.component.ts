import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'control-messages',
  template: `<div *ngIf="errorMessage" class="ml1 text-danger">{{errorMessage}}</div>`
})
export class ControlMessagesComponent { 
  @Input() control: FormControl;
  @Input() isFormSubmitted: boolean;
  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.touched || this.isFormSubmitted) {
        return ValidationService
          .getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}