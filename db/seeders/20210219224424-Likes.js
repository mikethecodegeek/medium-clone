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
     return queryInterface.bulkInsert('Likes', 
       [
         {userId:1, articleId:2, createdAt: new Date(), updatedAt: new Date()},
         {userId:1, articleId:3, createdAt: new Date(), updatedAt: new Date()},
         {userId:1, articleId:4, createdAt: new Date(), updatedAt: new Date()},
         {userId:1, articleId:5, createdAt: new Date(), updatedAt: new Date()},
         {userId:1, articleId:6, createdAt: new Date(), updatedAt: new Date()},
         {userId:1, articleId:7, createdAt: new Date(), updatedAt: new Date()},
         {userId:2, articleId:1, createdAt: new Date(), updatedAt: new Date()},
         {userId:2, articleId:6, createdAt: new Date(), updatedAt: new Date()},
         {userId:2, articleId:7, createdAt: new Date(), updatedAt: new Date()},
         {userId:3, articleId:1, createdAt: new Date(), updatedAt: new Date()},
         {userId:3, articleId:2, createdAt: new Date(), updatedAt: new Date()},
         {userId:3, articleId:4, createdAt: new Date(), updatedAt: new Date()},
         {userId:4, articleId:1, createdAt: new Date(), updatedAt: new Date()},
         {userId:4, articleId:6, createdAt: new Date(), updatedAt: new Date()},
         {userId:4, articleId:7, createdAt: new Date(), updatedAt: new Date()},
         {userId:5, articleId:2, createdAt: new Date(), updatedAt: new Date()},
         {userId:5, articleId:3, createdAt: new Date(), updatedAt: new Date()},
         {userId:5, articleId:4, createdAt: new Date(), updatedAt: new Date()},
         {userId:5, articleId:7, createdAt: new Date(), updatedAt: new Date()},
         {userId:6, articleId:1, createdAt: new Date(), updatedAt: new Date()},
         {userId:6, articleId:4, createdAt: new Date(), updatedAt: new Date()},
         {userId:6, articleId:5, createdAt: new Date(), updatedAt: new Date()},
         {userId:6, articleId:7, createdAt: new Date(), updatedAt: new Date()},
         {userId:7, articleId:1, createdAt: new Date(), updatedAt: new Date()},
         {userId:7, articleId:2, createdAt: new Date(), updatedAt: new Date()},
         {userId:7, articleId:5, createdAt: new Date(), updatedAt: new Date()},
         {userId:7, articleId:6, createdAt: new Date(), updatedAt: new Date()},
       ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Likes', null, {});
  }
};
