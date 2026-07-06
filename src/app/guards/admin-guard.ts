import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Supabase } from '../services/supabase/supabase';

export const adminGuard: CanActivateFn = async (_route, state) => {
  const supabase = inject(Supabase);
  const router = inject(Router);
  const messageService = inject(MessageService);

  const tieneSesion = supabase.usuarioLogueado() || (await supabase.cargarSesionActual());

  if (!tieneSesion) {
    setTimeout(() => {
      messageService.add({
        severity: 'error',
        summary: 'Acceso denegado',
        detail: 'Inicia sesion para continuar.',
      });
    });

    return router.createUrlTree(['/home'], {
      queryParams: { returnUrl: state.url },
    });
  }

  const esAdmin = await supabase.usuarioEsAdmin();

  if (esAdmin) {
    return true;
  }

  setTimeout(() => {
    messageService.add({
      severity: 'warn',
      summary: 'Permiso insuficiente',
      detail: 'Solo los administradores pueden ver los resultados de encuestas.',
    });
  });

  return router.createUrlTree(['/home']);
};
