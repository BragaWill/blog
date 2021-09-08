const Sequelize = require('sequelize')
const connection = require('../database/database')
const Category = require('../categories/Category')

const Article = connection.define('articles', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }, slug: {
    type: Sequelize.STRING,
    allowNull: false
  }, body: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

Article.belongsTo(Category)
Category.hasMany(Article)

module.exports = Article