'use strict';

const { UUIDV4 } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('administrador', [
      {
        id: "65648d54-f892-48eb-9368-346a853aeaee",
        name: 'Jerlib',
        email: 'admin@rdn.com',
        password: "1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('administrador', null, {});
  },
};
