import {model,Schema} from "mongoose"


const CartSchema= new Schema({
    name:{
        type:String,
        required:true,
        unique: true        
    },
    img:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
        default:0
    },
    price:{
        type:Number,
        required:true,
        default:0
    },

})
const Cart= model("carts",CartSchema)
export default Cart;