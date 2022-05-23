import {model,Schema} from "mongoose"

// sujeta a cambios de acuerdo a la info que llega desde PayPal.
var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment');
    

const OrderSchema=new Schema({

    user : {
         type : Schema.Types.ObjectId,
         ref : 'User'
    },

    products : [],
    
    // date : {
    //     type : Date,
    //     // default : Date.now()
    // },

    adress : {
        type : String,
        // required : true
    },

    isPaid : {
        type : Boolean,
        default : false
    },

    id2 : {
        type : Number,
        required : false
    },

    paymentId: { //ver como puedo sacarlo de PayPal
        type : String,
        // required : true
    },

    totalPrice : {
        type : Number,
        // required : true
    }


},
 {
     timestamps : true
 })




 

const Order=model("Order",OrderSchema)

export default Order;