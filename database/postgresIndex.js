const Sequelize = require('sequelize');
const { Pool } = require('pg')

const pool = new Pool({
  host: '52.14.197.39',
  user: 'postgres',
  password: 'password',
  database: 'suggestions'
})

const sequelize = new Sequelize('suggestions', 'postgres', 'password', {
  host: '52.14.197.39',
  // port:5432,
  dialect: 'postgres',

  operatorsAliases: false
})

sequelize
  .authenticate()
  .then(() => console.log('Successfully connected to the databases'))
  .catch(err => console.log('Error establishing connection to database', err))


pool.query('select NOW()', (err, data) => {
  console.log(err, data.rows)
})

module.exports = pool;