const Sequelize = require('sequelize');
const sequelize = new Sequelize('suggestions', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
})

sequelize
  .authenticate()
  .then(() => console.log('Successfully connected to the databases'))
  .catch(err => console.log('Error establishing connection to database', err))


  
module.exports = sequelize;