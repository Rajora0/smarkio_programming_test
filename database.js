// config variable env
require('dotenv').config()
// import package
const Sequelize = require('sequelize')
// server config 
const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
})
// authenticate
sequelize.authenticate().then(() => {

    console.log('Connect database.')

}).catch((err) => {
    console.log(err)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}