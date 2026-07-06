export interface Encuesta {
  id: number;
  pregunta_uno: string;
  pregunta_dos: string;
  pregunta_tres: string;
  created_at: string;
  usuarios_registrados?: {
    nombre: string;
    apellido: string;
    email: string;
    edad: number;
  } | null;
}
