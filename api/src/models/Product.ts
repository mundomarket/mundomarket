import {model,Schema,Types} from "mongoose"


const productSchema=new Schema({
    name:{
        type:String,
        required:true, 
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    description:{
        type:String,
        required:true,
        maxLength: 1000
    },
    stock:{ //QUANTITY
        type:Number,
        required:true,
        default:0
    },
    imageProduct:{
        type:String
    },
    review:{
        type:Number,
        required:true,
        default:0
        
    },
    rating:{
        type:Number,
        require:true,
        default:0
    },
    category:{
        type: String,
        ref:"Category",
        required:true
    },
    envio:{
        type:String,
        required:false
    }
})

const Product=model("Product",productSchema)

export default Product