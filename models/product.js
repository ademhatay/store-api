const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please enter product name'],
	},
	price: {
		type: Number,
		required: [true, 'Please enter product price'],
	},
	featured: {
		type: Boolean,
		default: false,
	},
	rating: {
		type: Number,
		default: 4.5,
	},
	company: {
		type: String,
		enum: {
			values: ['ikea', 'liddy', 'caressa', 'marcos'],
			message: '{VALUE} is not supported',
		},
	},
},
	{
		timestamps: true,
	}
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;