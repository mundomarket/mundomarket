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

    roles: [
        {
            type : Schema.Types.ObjectId,
            ref : 'Role'
        }
    ],

    history:{  //historial del usuario
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
    }


}, {
    versionKey : false
});


const User=model("User", userSchema)

export default User