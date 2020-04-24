'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shops', [
      {
      name : 'Better',
      type: 'Makanan',
      deskripsi:"Snack masa kini",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : 'Erigo',
      type: 'Fashion',
      deskripsi:"Fashion masa kini",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : 'Wardah',
      type: 'Kecantikan',
      deskripsi:"For your beautiful life",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : 'Yamaha',
      type: 'Otomotif',
      deskripsi:"Semakin didepan",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : 'Sensi',
      type: 'Kesehatan',
      deskripsi: "Health is number one",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : 'Samsung',
      type: 'Elektronik',
      deskripsi: "Digitally Yours",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : 'Shopee',
      type: 'Ecommerce',
      deskripsi: "Semua belanja disini",
      createdAt : new Date(),
      updatedAt : new Date()
    }
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
    return queryInterface.bulkDelete('Shops', null, {truncate:true, restartIdentity:true}, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
