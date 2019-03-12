const Sequelize = require('sequelize');
const { Pool } = require('pg')

const pool = new Pool({
  host: '18.220.169.235',
  user: 'postgres',
  password: 'password',
  database: 'suggestions'
})

// pool.query('select NOW()', (err, data) => {
//   console.log(err, data.rows)
// })


const sequelize = new Sequelize('suggestions', 'postgres', 'password', {
  host: '18.220.169.235',
  // port:5432,
  dialect: 'postgres',

  operatorsAliases: false
})

// sequelize
//   .authenticate()
//   .then(() => console.log('Successfully connected to the databases'))
//   .catch(err => console.log('Error establishing connection to database', err))



module.exports = {pool , sequelize};