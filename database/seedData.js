const Product = require('./index.js');
const data = require('../data.json');
var faker = require('faker')
var fs = require('fs')

// const postData = objArr => {
// 	objArr.forEach(obj => {
// 		Product.create({
// 			id: obj.id,
// 			title: obj.title, 
// 			price: obj.price,
// 			salePrice: obj.salePrice, 
// 			reviewStars: obj.reviewStars, 
// 			reviewsTotal: obj.reviewsTotal,
// 			productPicture: obj.productPicture,
// 			tags: obj.tags,
// 			kind: obj.kind, 
// 			specialTag: obj.specialTag
// 		});
// 	});
// };

// postData(data);
// let id = 0;
// let priceArr = [100, 70, 80, 35, 90, 45, 170]
// let salePriceArr = [null, true]
// let tagArr = ['men', 'women']
// let extraTagArr = ['running', 'essentials', 'golf', 'originals', 'soccer', 'training']
// let kindArr = ['Performance', 'Essentials', 'Originials']
// let specialTagArr = ['Exclusive', 'Sale', null]
let id = 0;
let priceArr = [100, 70, 80, 35, 90, 45, 170]
let salePriceArr = [0, true]
let tagArr = ['men', 'women']
let extraTagArr = ['running', 'essentials', 'golf', 'originals', 'soccer', 'training']
let kindArr = ['Performance', 'Essentials', 'Originials']
let specialTagArr = ['Exclusive', 'Sale', ""]

const createData = () => {
	id++;
	let price = priceArr[Math.floor(Math.random() * priceArr.length)]
	let salePrice = salePriceArr[Math.floor(Math.random() * 2)]
	if(salePrice === true) {
		if(price === 100) {
			salePrice = 70
		} else if (price === 80){
			salePrice = 60
		} else if (price === 35){
			salePrice = 25
		} else if (price === 90) {
			salePrice = 45
		} else if (price == 45) {
			salePrice = 23
		} else if(price === 170) {
			salePrice = 0;
		} 
		else {
			salePrice = 0;
		}
	}
	let reviewStars = Math.floor(Math.random() * 6)
	let reviewsTotal = Math.floor(Math.random() * 4000) + 1
	let productPicture = faker.image.imageUrl()
	let tags = [];
	tags.push(tagArr[Math.floor(Math.random() * tagArr.length)])
	let extraTag = extraTagArr[Math.floor(Math.random() * extraTagArr.length)]
	tags.push(extraTag)
	let kind = kindArr[Math.floor(Math.random() * kindArr.length)]
	let specialTag = specialTagArr[Math.floor(Math.random() * specialTagArr.length)]
	let title = faker.lorem.words()

	// let obj = {
	// 	id : id,
	// 	title: faker.lorem.words(),
	// 	price: price,
	// 	salePrice,
	// 	reviewStars,
	// 	reviewsTotal,
	// 	productPicture,
	// 	tags,
	// 	kind,
	// 	specialTag
	// }
	let tagsStr = ''
	for(let i = 0; i < tags.length; i++) {
		if(i !== tags.length - 1) {
			tagsStr += tags[i] + ","
		} else {
			tagsStr += tags[i]
		}
	}
	let dataStr =`${id},${title},${price},${salePrice},${reviewStars},${reviewsTotal},${productPicture},"{${tagsStr}}",${kind},${specialTag}\n`
	// return obj;
	return dataStr
	
	// Product.create({
	// 	id: id,
	// 	title: faker.lorem.words(),
	// 	price


	// })
}

function writeOneMillionTimes() {
	let file = fs.createWriteStream('./data.csv')
	let i = 1e7;
	// data = createData();
	write();
	
  function write() {
		let ok = true;
		// let data = createData();
    do {
			i--;
			let data = createData()
      if (i === 0) {
				file.write((data), () => file.write());
				
      } else {
				ok = file.write((data));
      }
    } while (i > 0 && ok);
    if (i > 0) {
      file.once('drain', write);
    } else {
			file.once('drain', () => console.log('done'))
		}
  }
}

writeOneMillionTimes();

// module.exports = postData;