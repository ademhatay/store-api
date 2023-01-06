require('dotenv').config();

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorhandlerMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');
const productsRoute = require('./routes/products');

// middlewares
app.use(express.json());

// routes

app.get('/', (req, res) => {
	res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>')
});

app.use('/api/v1/products', productsRoute);

// products Route

app.use(notFoundMiddleware);
app.use(errorhandlerMiddleware);

const port = process.env.PORT || 8000;

const start = async () => {
	try {
		// connect db
		connectDB()
		app.listen(port, console.log(`server running on ${port}...`))
	} catch (error) {
		console.log(error);
	}
}

start();
