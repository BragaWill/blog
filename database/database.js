const Sequelize = require('sequelize')

const connection = new Sequelize('guiapress', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  timezone: '-03:00'
})

module.exports = connection;