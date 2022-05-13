import {model,Schema} from "mongoose"

const userSchema = new Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,   
    },

    orders:{  //historial de compras del usuario
        type:Array,
        default:[]
    },
    
    country : {
        type: String,
        required : true
    },

    city : {
        type: String,
        required : true
    },

    adress:{
        type: String,
        required: true
    },

    phone : {
        type : String,
        required : true
    },

    cuil : {
        type : String,
        required : true
    },

    roles: [
        {
            type : Schema.Types.ObjectId,
            ref : 'Role'
        }
    ],

    products: [
        {
            type : Schema.Types.ObjectId,
            ref : 'Product'
        }
    ],

    verified : {
        type : Boolean,
        default : false,
        required : true
    },

    suspendedAccount : {
        type : Boolean,
        default : false,
        required : true
    }


}, {
    versionKey : false
});


const User=model("User", userSchema)

export default User