const Product = require('../database/index.js');
// const sequelize = require('../database/postgresIndex.js');
const {pool , sequelize}= require('../database/postgresIndex.js')


module.exports = {
	// fetch: (req, res) => {
	// 	const {id} = req.query;
	// 	if (id) {
	// 		console.time('test')
	// 		return Product.find({id: id}, ['tags'], (err, product) => {
	// 			if (err) {
	// 				res.status(404).send(err);
	// 			} else {
	// 				// console.log(product);
	// 				let itemTags = product[0].tags;
	// 				return Product.find({ tags: {$in: itemTags } }, (err, products) => {
	// 					if (err) {
	// 						res.status(404).send(err);
	// 					} else {
	// 						// console.log(products)
	// 						console.timeEnd('test');
	// 						res.status(200).send(products);
	// 					}
	// 				}).limit(16);
	// 			}
	// 		});
	// 	}
	// }

	// fetch: (req, res) => {
	// 	// const {id} = req.query;
	// 	const id = Math.floor(Math.random() * 1100000) + 8900000
	// 	if (id) {
	// 		console.time('test')
	// 		sequelize.query(`SELECT tags FROM products where id = ${id}`)
	// 		  .then( product => {
	// 				// console.log(product[0][0].tags);
	// 				return product[0][0].tags
	// 			})
	// 			.then( productArr => {
	// 				// console.log(productArr)
	// 				sequelize.query(`SELECT * FROM products where '${productArr[0]}' = any(tags) or '${productArr[1]}' = any(tags) limit 16`)
	// 				  .then( result => {
	// 						// console.log(result[0])
	// 						console.timeEnd('test');
	// 						res.status(200).send(result[0])
	// 					})
	// 			})
	// 	}
	// }
	fetch: (req, res) => {
		// const {id} = req.query;
		const id = Math.floor(Math.random() * 1100000) + 8900000
		if (id) {
			console.time('test')
			pool.query(`SELECT tags FROM products where id = ${id}`)
			  .then( product => {
					// console.log(product.rows[0].tags);
					// return product[0][0].tags
					return product.rows[0].tags
				})
				.then( productArr => {
					// console.log(productArr)
					pool.query(`SELECT * FROM products where '${productArr[0]}' = any(tags) or '${productArr[1]}' = any(tags) limit 16`)
					  .then( result => {
							// console.log(result[0])
							// console.log(result.rows)
							console.timeEnd('test');
							res.status(200).send(result.rows)
						})
				})
		}
	}
};