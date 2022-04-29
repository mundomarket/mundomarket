const { model, Schema } = require('mongoose')

const CartSchema = new Schema({
    name : {
        type : String, 
        required : true,
        unique : true
    },
    image : {
        type : String,
    },
    amount : {
        type : Number,
        required : true
    },
    price : {
        type : Number,
        required : true
    }
});


const Cart = model('Cart', CartSchema);
export default Cart;