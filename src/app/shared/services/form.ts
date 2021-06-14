import {FormControl, FormGroup} from '@angular/forms';

export function getFormControlOrThrow(name: string, form: FormGroup): FormControl {
  const control = form.get(name);
  if (!control) {
    throw new Error('Trying to access view on uninitialized view');
  }
  if (control instanceof FormControl) {
    return control;
  } else {
    throw new Error('Control is not FormControl');
  }
}
