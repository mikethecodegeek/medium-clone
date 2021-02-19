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
     return queryInterface.bulkInsert('Comments', 
       [
         {userId:2, articleId: 1, body: 'Amazing Poem', createdAt: new Date(), updatedAt: new Date()},
         {userId:3, articleId: 1, body: 'My favorite poem of all time!', createdAt: new Date(), updatedAt: new Date()},
         {userId:4, articleId: 1, body: 'I love this poem!', createdAt: new Date(), updatedAt: new Date()},
         {userId:5, articleId: 1, body: 'So true, so true!', createdAt: new Date(), updatedAt: new Date()},
         {userId:6, articleId: 1, body: 'This poem makes me think....', createdAt: new Date(), updatedAt: new Date()},
         {userId:7, articleId: 1, body: 'So heartfelt', createdAt: new Date(), updatedAt: new Date()},
         {userId:1, articleId: 2, body: 'Wow...Just Wow!!', createdAt: new Date(), updatedAt: new Date()},
         {userId:3, articleId: 2, body: 'Incredible!', createdAt: new Date(), updatedAt: new Date()},
         {userId:4, articleId: 2, body: 'This came from the heart!', createdAt: new Date(), updatedAt: new Date()},
         {userId:5, articleId: 2, body: 'So deep!', createdAt: new Date(), updatedAt: new Date()},
         {userId:6, articleId: 2, body: 'Amazing', createdAt: new Date(), updatedAt: new Date()},
         {userId:7, articleId: 2, body: 'So much soul', createdAt: new Date(), updatedAt: new Date()},
         
         {userId:1, articleId: 3, body: 'This poem always makes me think', createdAt: new Date(), updatedAt: new Date()},
         {userId:2, articleId: 3, body: 'Incredible!', createdAt: new Date(), updatedAt: new Date()},
         {userId:6, articleId: 3, body: 'Soulful', createdAt: new Date(), updatedAt: new Date()},
         {userId:7, articleId: 3, body: 'I love this poem', createdAt: new Date(), updatedAt: new Date()},
         
         {userId:1, articleId: 4, body: 'Always my favorite!!', createdAt: new Date(), updatedAt: new Date()},
         {userId:2, articleId: 4, body: 'I can feel the emotion!', createdAt: new Date(), updatedAt: new Date()},
         {userId:3, articleId: 4, body: 'Incredible!', createdAt: new Date(), updatedAt: new Date()},
         {userId:6, articleId: 4, body: 'Amazing', createdAt: new Date(), updatedAt: new Date()},
         {userId:7, articleId: 4, body: 'So much soul', createdAt: new Date(), updatedAt: new Date()},
         
        
         {userId:2, articleId: 5, body: 'Incredible!', createdAt: new Date(), updatedAt: new Date()},
         {userId:3, articleId: 5, body: 'Such memories', createdAt: new Date(), updatedAt: new Date()},
         {userId:7, articleId: 5, body: 'I love this poem', createdAt: new Date(), updatedAt: new Date()},
        
        
         {userId:3, articleId: 6, body: 'WOW!', createdAt: new Date(), updatedAt: new Date()},
         {userId:4, articleId: 6, body: 'So heartfelt', createdAt: new Date(), updatedAt: new Date()},
         {userId:7, articleId: 6, body: 'I love this poem', createdAt: new Date(), updatedAt: new Date()},
         
         {userId:1, articleId: 7, body: 'Greatest of all time!', createdAt: new Date(), updatedAt: new Date()},
         {userId:2, articleId: 7, body: 'Incredible!', createdAt: new Date(), updatedAt: new Date()},
         {userId:3, articleId: 7, body: 'WOW!', createdAt: new Date(), updatedAt: new Date()},
         {userId:7, articleId: 7, body: 'I love this poem', createdAt: new Date(), updatedAt: new Date()},
       ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Comments', null, {});
  }
};
