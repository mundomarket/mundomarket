import {model,Schema} from "mongoose"

// sujeta a cambios de acuerdo a la info que llega desde PayPal.


const OrderSchema=new Schema({

    user : {
         type : Schema.Types.ObjectId,
         ref : 'User'
    },

    products : [
        {
            type : Schema.Types.ObjectId,
            ref : 'Product'  

        }    
        ],
    
    date : {
        type : Date
    },

    adress : {
        type : String,
        required : true
    },

    paymentId: { //ver como puedo sacarlo de PayPal
        type : String,
        required : true
    },

    infoPayPal : {
        type : String
    }


})

const Order=model("Order",OrderSchema)

export default Order;