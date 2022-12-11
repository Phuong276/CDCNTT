const { Sequelize } = require("sequelize")
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_DATABASE_NAME, 
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false,
        dialectOptions: {
            ssl: {
            require: true,
            rejectUnauthorized: false
            }
        }
    });

let connectDB = async () => {
    try {
       await sequelize.authenticate()
       console.log('Connection DB successfully') 
    } catch(error) {
        console('Eroor:', error)
    }
}

module.exports = connectDB