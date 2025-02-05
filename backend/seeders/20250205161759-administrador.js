// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert('administrador', [
//       {
//         id: "699089c1-ada7-4069-b782-6b8f8f90ae58",
//         name: 'Jerlib Gonzalez',
//         email: 'admin@rnd.com',
//         password: '12345',
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     ]);

//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('administrador', null, {});
//   },
// };

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('administrador', [
      {
        id: "699089c1-ada7-4069-b782-6b8f8f90ae58",
        name: 'Jerlib Gonzalez',
        email: 'admin@rnd.com',
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert('alumno', [
      {
        id: "b7da4bee-07e8-4145-92dd-341da9564ff8",
        name: 'Juan Pérez',
        email: 'juan.perez@gmail.com',
        dni: '12345678',
        fecha_nacimiento: '2000-01-15',
        administradorId: "699089c1-ada7-4069-b782-6b8f8f90ae58",

      },
      {
        id: "fea96203-7836-44d6-9c1c-1c333f34fab8",
        name: 'María Gómez',
        email: 'maria.gomez@gmail.com',
        dni: '87654321',
        fecha_nacimiento: '1998-06-20',
        administradorId: "699089c1-ada7-4069-b782-6b8f8f90ae58",

      },
    ]);

    await queryInterface.bulkInsert('notas', [
      {
        id: "a707e706-0da7-4b92-8770-964583573b3d",
        materia: 'Algoritmo',
        calificacion: 85,
        alumnoId: "fea96203-7836-44d6-9c1c-1c333f34fab8",
        administradorId: "699089c1-ada7-4069-b782-6b8f8f90ae58",

      },
      {
        id: "38fb7b88-1ee3-4ec8-b1a7-0a2d50bd8850",
        materia: 'Bases de Datos',
        calificacion: 90,
        alumnoId: "fea96203-7836-44d6-9c1c-1c333f34fab8",
        administradorId: "699089c1-ada7-4069-b782-6b8f8f90ae58",

      },
      {
        id: "a236db6a-029e-42fb-9b0a-b563a58db5c3",
        materia: 'Sistemas de informacion',
        calificacion: 78,
        alumnoId: "b7da4bee-07e8-4145-92dd-341da9564ff8",
        administradorId: "699089c1-ada7-4069-b782-6b8f8f90ae58",

      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('notas', null, {});
    await queryInterface.bulkDelete('alumno', null, {});
    await queryInterface.bulkDelete('administrador', null, {});
  },
};

