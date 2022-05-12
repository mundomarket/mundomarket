import {model,Schema} from "mongoose"


const OrderSchema=new Schema({
    user : {
         type : Schema.Types.ObjectId,
         ref : 'User'
    },

    cart : [
        {
            _id: false,
            type : Schema.Types.ObjectId,
            ref : 'Cart'

        }
        ],

    adress : {
        type : String,
        required : true
    },

    paymentId: { //ver como puedo sacarlo de PayPal
        type : String,
        required : true
    },


})

const Order=model("Order",OrderSchema)

export default Order;