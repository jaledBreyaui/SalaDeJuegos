import { CanDeactivateFn } from '@angular/router';

export interface ComponenteConPartidaEnCurso {
  puedeSalirDePartida: () => boolean | Promise<boolean>;
}

export const partidaEnCursoGuard: CanDeactivateFn<ComponenteConPartidaEnCurso> = (component) => {
  return component.puedeSalirDePartida();
};
