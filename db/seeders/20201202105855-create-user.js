'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Users',
            [
                {
                    firstName: 'Ed',
                    lastName: 'Allen',
                    userName: 'ed_allen',
                    email: 'ed_allen@email.com',
                    hashedPassword: 'eb45a6e1-baf8-4557-9f4b-8bb71912f6c4',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    firstName: 'Edward',
                    lastName: 'Alford',
                    userName: 'edward_alford',
                    email: 'edward_alford@email.com',
                    hashedPassword: '9339841a-982f-4ef2-bdbe-7c4f693b24b6',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    firstName: 'Eddy',
                    lastName: 'Allenson',
                    userName: 'eddy_allenson',
                    email: 'eddy_allensonn@email.com',
                    hashedPassword: 'a9ae732e-fc5a-42e8-beb4-ec9b0da0b96e',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    firstName: 'Edgar',
                    lastName: 'Albert',
                    userName: 'edgar_albert',
                    email: 'edgar_albert@email.com',
                    hashedPassword: '58f34825-6793-4943-81e6-00b71f823955',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    firstName: 'Eduardo',
                    lastName: 'Alemania',
                    userName: 'eduardo_alemania',
                    email: 'eduardo_alemania@email.com',
                    hashedPassword: '44e6deef-c44e-4438-90a0-878a29d63b7f',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    firstName: 'Eddie',
                    lastName: 'Allenby',
                    userName: 'eddie_allenby',
                    email: 'eddie_allenby@email.com',
                    hashedPassword: 'd1afcbe1-e86f-4303-a3c4-7ef5d69f7b72',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    },
};
