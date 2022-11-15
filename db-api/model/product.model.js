const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    imageURL: {
        type: String
    },
    phone: {
        type: String
    },
    select: {
        type: String
    }
},
{
    collection: 'products'
}
);

module.exports = mongoose.model('ProductSchema', productSchema)