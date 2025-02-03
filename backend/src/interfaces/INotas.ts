export interface INotas {
    id?: number;
    materia: string;
    calificacion: number;
    alumnoId?: string | undefined
    administradorId?: string | undefined
}