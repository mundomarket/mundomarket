import {model,Schema} from "mongoose"

const userSchema=new Schema({

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
    // role:{ //(normal or admin)
    //     type:String,
    //     enum:{
    //         values:["admin","client"],
    //         default:"client",
    //         message:`{VALUE} no es un rol válido`,
    //         required:true
    //     }
    role:{
        type:Number, //normal or admin
        default:0
    },
    history:{  //historial del usuario
        type:Array,
        default:[]
    },
    localidad:{
        type: String,
        required: true
    }
})

const User=model("User", userSchema)

export default User