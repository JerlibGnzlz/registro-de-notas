import { Administrador } from "./Administrador";
import { Alumno } from "./Alumno";
import { Notas } from "./Notas";


Administrador.hasMany(Alumno)
Alumno.belongsTo(Administrador);

Alumno.hasMany(Notas);
Notas.belongsTo(Alumno);

Administrador.hasMany(Notas);
Notas.belongsTo(Administrador);

export { Administrador, Alumno, Notas }