import {model,Schema} from "mongoose"


const categorySchema= new Schema({
    nameCategory:{
        type:String,
        required:true,
        unique:true,
        maxLength:60
    }

})
const Category= model("Category",categorySchema)
export default Category