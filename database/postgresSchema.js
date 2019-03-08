const Sequelize = require('sequelize');
const sequelize = require('./postgresIndex.js');

const Product = sequelize.define(
    'product', 
    {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        salePrice : {
          type: Sequelize.INTEGER
        },
        reviewStars : {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        reviewsTotal : {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        productPicture : {
          type: Sequelize.STRING,
          allowNull: false
        },
        tags : {
          type: Sequelize.ARRAY(Sequelize.TEXT),
          allowNull: false
        },
        kind : {
          type: Sequelize.STRING,
          allowNull: false
        },
        specialTag : {
          type: Sequelize.STRING
        }
    },
    { timestamps: false }
);


sequelize.sync({force: false})

module.exports.Product = Product;