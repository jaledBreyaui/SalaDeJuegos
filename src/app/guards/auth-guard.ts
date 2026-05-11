import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Supabase } from '../services/supabase/supabase';

export const authGuard: CanActivateFn = async (_route, state) => {
  const supabase = inject(Supabase);
  const router = inject(Router);
  const messageService = inject(MessageService);

  if (supabase.usuarioLogueado()) {
    return true;
  }

  const { data } = await supabase.clienteSupabase.auth.getSession();

  if (data.session) {
    supabase.usuarioLogueado.set(true);
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
