import { Pregunta } from './pregunta';
export interface RespuestaTrivia {
  response_code: number;
  results: Pregunta[];
}
