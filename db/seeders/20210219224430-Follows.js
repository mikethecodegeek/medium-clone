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
      const follows = [];

      for (let a = 1; a<18;a++) {
        const rand= Math.floor(Math.random() * 3) + 1
        const rand2= Math.floor(Math.random() * 3) + 1
        // console.log('followss---------',rand)
          for (let b=rand; b<18;b+=rand2) {
            // console.log('follows count------',b)
            const follow = {
              userId:a,
              followerId:b,
              createdAt: new Date(), 
              updatedAt: new Date()
            }
            follows.push(follow)
          }
      }

     return queryInterface.bulkInsert('FollowingUsers', 
       [
        ...follows
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
