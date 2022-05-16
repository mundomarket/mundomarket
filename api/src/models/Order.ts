import {model,Schema} from "mongoose"

// sujeta a cambios de acuerdo a la info que llega desde PayPal.


const OrderSchema=new Schema({

    user : {
         type : Schema.Types.ObjectId,
         ref : 'User'
    },

    products : [
        // {
        //     type : Schema.Types.ObjectId,
        //     ref : 'Product'
        //     // {"48ba21a389sg1eg2","2837930hca2a"}  

        // }
        //o un array vacío y pusheo lo que me llega del front. puedo hacer una búsqueda por nombre exacta para vincular si no me llega el ObjectId    
        ],
    
    date : {
        type : Date
    },

    adress : {
        type : String,
        // required : true
    },

    isPaid : {
        type : Boolean,
        default : false
    },

    paymentId: { //ver como puedo sacarlo de PayPal
        type : String,
        // required : true
    },

    totalPrice : {
        type : Number,
        // required : true
    }


})

const Order=model("Order",OrderSchema)

export default Order;