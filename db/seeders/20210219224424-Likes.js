'use strict';
const faker=require('faker')
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
    const likes = [];

    for (let a = 1; a<18;a++) {
      const rand= Math.floor(Math.random() * 5) + 1

      // connsole.log('likes====',rand)
        for (let b=1; b<167;b+=rand) {
          // console.log('likes count------',b)
          const like = {
            userId:a,
            articleId:b,
            createdAt: faker.date.between('1-1-2020','3-1-2021'), 
            updatedAt: new Date()
          }
          likes.push(like)
        }
    }
     return queryInterface.bulkInsert('Likes', 
       [ ...likes,
        
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
