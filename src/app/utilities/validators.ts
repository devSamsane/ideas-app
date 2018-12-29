import { AbstractControl } from '@angular/forms';

export const validateWhitespace = (control: AbstractControl) => {
  let hasWhitespace = (control.value || '').trim().length === 0;

  let isValid = !hasWhitespace;

  return isValid ? null : { trimmed: true };
};
