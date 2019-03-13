const express = require('express');
const morgan = require('morgan');
const path = require('path');
const parser = require('body-parser');
const cors = require('cors');
const controllers = require('./controllers');
const app = express();
const port = process.env.PORT || 3004;
require('newrelic');

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());

app.get('/suggestions', controllers.fetch);
app.get('/loaderio-94f500bb20d247487a3c1bed93b92952/', (req, res) => {
	res.sendFile(path.join(__dirname, './loaderio-94f500bb20d247487a3c1bed93b92952.txt'))
})

app.listen(port, () => { 
	console.log(`server running at: http://localhost:${port}`);
});
