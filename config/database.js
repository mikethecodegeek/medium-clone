const {
  db: { username, password, database, host },
} = require('./index');

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  // },
  production: {
    dialect: "postgres",
    seederStorage: "sequelize",
    use_env_variable: 'DATABASE_URL',
    "dialectOptions": {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }}
  }
};


// This is a test