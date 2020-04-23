'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Selebs', [
      {
      name: 'Raditya Dika',
      age: 30,
      gender : 'male',
      followers : 50000,
      fee : 2e6,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name: 'Arief Muhammad',
      age: 27,
      gender : 'male',
      followers : 40000,
      fee : 1e6,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name: 'Anya Geraldine',
      age: 22,
      gender : 'female',
      followers : 550000,
      fee : 2e6,
      createdAt : new Date(),
      updatedAt : new Date()
    },
  ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Selebs', null, {truncate:true, restartIdentity:true}, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
