import { ValidatorFn, ValidationErrors, AbstractControl } from "@angular/forms";

export function confirmarClaveValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
        
    const claveControl = formGroup.get('clave');
    const repiteClaveControl = formGroup.get('repiteClave');
    const respuestaError = { noCoincide: 'La clave no coincide' };

    if (claveControl?.value !== repiteClaveControl?.value) {
        formGroup.get('repiteClave')?.setErrors(respuestaError);
        // Si los campos de contraseña no coinciden, devolvemos un error de validación
        return respuestaError;

    } else {
        formGroup.get('repiteClave')?.setErrors(null);
        // Si los campos de contraseña coinciden, la validación es correcta
        return null;
    } 
    };
}