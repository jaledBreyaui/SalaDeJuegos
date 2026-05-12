export interface MensajeChat {
    id: number;
    mensaje: string;
    created_at: string;
    usuarios_registrados: {
        nombre: string;
        email: string;
    } | null;
}
