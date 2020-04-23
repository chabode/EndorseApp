'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        SelebId: 2,
        ShopId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SelebId: 1,
        ShopId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SelebId: 5,
        ShopId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SelebId: 3,
        ShopId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SelebId: 1,
        ShopId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SelebId: 2,
        ShopId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SelebId: 3,
        ShopId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SelebId: 5,
        ShopId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SelebId: 1,
        ShopId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SelebId: 2,
        ShopId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SelebId: 3,
        ShopId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SelebId: 5,
        ShopId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SelebId: 1,
        ShopId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        SelebId: 2,
        ShopId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    return queryInterface.bulkInsert('SelebShops', data, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('SelebShops',null,{truncate:true, restartIdentity:true},{})
  }
};
