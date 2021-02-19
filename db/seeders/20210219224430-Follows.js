'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
     return queryInterface.bulkInsert('FollowingUsers', 
       [
         {userId:1, followerId:2, createdAt: new Date(), updatedAt: new Date()},
         {userId:1, followerId:3, createdAt: new Date(), updatedAt: new Date()},
         {userId:1, followerId:4, createdAt: new Date(), updatedAt: new Date()},
         {userId:1, followerId:5, createdAt: new Date(), updatedAt: new Date()},
         {userId:2, followerId:4, createdAt: new Date(), updatedAt: new Date()},
         {userId:2, followerId:6, createdAt: new Date(), updatedAt: new Date()},
         {userId:2, followerId:7, createdAt: new Date(), updatedAt: new Date()},
         {userId:3, followerId:1, createdAt: new Date(), updatedAt: new Date()},
         {userId:3, followerId:4, createdAt: new Date(), updatedAt: new Date()},
         {userId:3, followerId:6, createdAt: new Date(), updatedAt: new Date()},
         {userId:4, followerId:5, createdAt: new Date(), updatedAt: new Date()},
         {userId:4, followerId:6, createdAt: new Date(), updatedAt: new Date()},
         {userId:4, followerId:7, createdAt: new Date(), updatedAt: new Date()},
         {userId:5, followerId:1, createdAt: new Date(), updatedAt: new Date()},
         {userId:5, followerId:2, createdAt: new Date(), updatedAt: new Date()},
         {userId:5, followerId:6, createdAt: new Date(), updatedAt: new Date()},
         {userId:5, followerId:7, createdAt: new Date(), updatedAt: new Date()},
         {userId:6, followerId:1, createdAt: new Date(), updatedAt: new Date()},
         {userId:6, followerId:3, createdAt: new Date(), updatedAt: new Date()},
         {userId:6, followerId:5, createdAt: new Date(), updatedAt: new Date()},
         {userId:6, followerId:7, createdAt: new Date(), updatedAt: new Date()},
         {userId:7, followerId:1, createdAt: new Date(), updatedAt: new Date()},
         {userId:7, followerId:2, createdAt: new Date(), updatedAt: new Date()},
         {userId:7, followerId:6, createdAt: new Date(), updatedAt: new Date()},
       ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('FollowingUsers', null, {});
  }
};
