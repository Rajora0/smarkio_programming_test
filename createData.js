const data = require('./database')

// define table
const database = data.sequelize.define('Texts',{
    phrase:{
        type: data.Sequelize.TEXT
    }
})

// force create table
database.sync()

module.exports = database