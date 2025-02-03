export interface IAlumno {
    id?: number;
    name: string;
    email: string;
    dni: string
    fecha_nacimiento: Date | string;
    administradorId?: string | undefined
}
