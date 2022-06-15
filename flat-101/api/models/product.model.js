const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    name: {
        type: String,
        required: 'You must provide a name for the product'
    },
    image: {
        type: String,
        default: 'https://www.visobath.com/wp-content/uploads/2021/02/Icon_03.jpg'
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: 'You must set a price for the product'
    },
    units: {
        type: Number,
        required: 'Insert the number of products avalaible'
    }
},
{
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (doc, ret) => {
            ret.id = doc.id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;

            return ret
            }
        },

})

const Product = mongoose.model('Product', productSchema);
module.exports = Product