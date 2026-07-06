import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function opcionExclusivaValidator(
  opcionUno: string,
  opcionDos: string,
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valorUno = control.get(opcionUno)?.value;
    const valorDos = control.get(opcionDos)?.value;

    if (valorUno === valorDos) {
      return { opcionInvalida: true };
    }

    return null;
  };
}
