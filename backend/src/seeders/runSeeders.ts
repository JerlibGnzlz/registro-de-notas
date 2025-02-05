// import { db } from '../database';
// import { Administrador } from '../models/Administrador';

// // import { UUIDV4 } from 'sequelize';

// export const runSeeder = async () => {
//   try {
//     const tableExists = await db.getQueryInterface()
//       .describeTable('administrador')
//       .catch(() => false);

//     if (!tableExists) {
//       console.error('La tabla "administrador" no existe. Aplica las migraciones primero.');
//       return;
//     }

//     await Administrador.destroy({ where: { email: 'admin@rdn.com' } });

//     await Administrador.create({
//       // id: "65648d54-f892-48eb-9368-346a853aeaee",
//       name: 'Jerlib',
//       email: 'admin@rdn.com',
//       password: "1234",
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     });

//     console.log('Seeder ejecutado: Administrador inicial creado o actualizado.');
//   } catch (error) {
//     console.error('Error al ejecutar el seeder:', error);
//   }
// };
