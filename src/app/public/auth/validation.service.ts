// tslint:disable-next-line
const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      'required': 'Required',
      'minlength': `Minimum length ${validatorValue.requiredLength}`,
      'email': 'Invalid email address',
      'repeatPassword': 'Invalid repeat password',
    };

    return config[validatorName];
  }

  static emailValidator(control) {
    if (control.value.match(emailRegex)) {
      return null;
    } else {
      return { 'email': true };
    }
  }

  static repeatPasswordValidator(formControl) {
    const { password, repeatPassword } = formControl.controls;

    if (password.value === repeatPassword.value) {
      return null;
    } else {
      return { 'repeatPassword': true };
    }
  }
}
