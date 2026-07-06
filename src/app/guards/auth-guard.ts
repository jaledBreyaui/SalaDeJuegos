import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Supabase } from '../services/supabase/supabase';

export const authGuard: CanActivateFn = async (_route, state) => {
  const supabase = inject(Supabase);
  const router = inject(Router);
  const messageService = inject(MessageService);

  const tieneSesion = supabase.usuarioLogueado() || (await supabase.cargarSesionActual());

  if (tieneSesion) {
    return true;
  }

  setTimeout(() => {
    messageService.add({
      severity: 'error',
      summary: 'Acceso denegado',
      detail: 'Inicia sesion para jugar',
    });
  });

  return router.createUrlTree(['/home'], {
    queryParams: { returnUrl: state.url },
  });
};
