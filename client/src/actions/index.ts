import axios from "axios"
import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { Orders } from "../NavBar/FiletrMenu"
import { useNavigate } from "react-router-dom"
import Cookie from 'js-cookie'
const api='http://localhost:3000'
//const api='https://mundomarket.herokuapp.com'

const token=Cookie.get('x-access-token')?JSON.parse(Cookie.get('x-access-token')!):''

/////////////////////////////////// PRODUCTOS //////////////////////////////////////////////////////////

export const GETPRODUCTS=createAsyncThunk('GET_PRODUCTS',async ()=>{
    const result=await axios(`${api}/products`)
    return result.data
})

export const GETUSERPRODUCTS=createAsyncThunk('GET_USER_PRODUCTS',async (id: string | undefined)=>{
  const result=await axios(`${api}/products`,{headers:{
    'x-access-token':`${token}`
  }})
  return result.data
})

export const GETDETAIL=createAsyncThunk('GET_DETAIL',async (id: string | undefined)=>{
    const result=await axios(`${api}/products/${id}`) 
    return result.data
})

export const POSTPRODUCT=createAsyncThunk('POST_PRODUCT',async (value: {} | undefined)=>{
  const result=await axios.post(`${api}/products`,value,{headers:{
    'x-access-token':`${token}`
  }})
  return result.data
})

export const GETSEARCHBYNAME=createAsyncThunk('GET_SEARCHNAME',async (name: string | undefined)=>{
  const result=await axios(`${api}/products?name=${name}`) 
  return result.data
})

export const GETSEARCHBYCATEGORY=createAsyncThunk('GET_SEARCHCAT',async (name: string | undefined)=>{
  const result=await axios(`${api}/products?filterName=category&filterOrder=${name?.toLocaleLowerCase()}&names=stock&sort=1`) 
  return result.data
})

export const GETRECOMMENDED=createAsyncThunk('GET_RECOMMENDED',async (name: string | undefined)=>{
  const result=await axios(`${api}/products?filterName=category&filterOrder=${name?.toLocaleLowerCase()}&names=stock&sort=1`) 
  return result.data.splice(0,4)
})

export const GETORDENAMIENTOS=createAsyncThunk('GET_ORDENAMIENTOS',async (input:Orders)=>{
  return input
})

//////////////////////////////////// USUARIOS /////////////////////////////////////////////////////////

export const GETUSERS=createAsyncThunk('GET_USERS',async ()=>{
  const result=await axios(`${api}/users`)
  return result.data
})

export const REGISTERUSER=createAsyncThunk('REGISTERUSER',async (input:{})=>{
  await axios.post(`${api}/users/signup`,input)

})

export const LOGINUSER=createAsyncThunk('LOGINUSER',async (input:{})=>{
  const login=await axios.post(`${api}/users/login`,input)
  return login.data
})

export const LOGOUT=createAction('LOGOUT')

export const MODIFYUSER=createAsyncThunk('MODIFYUSER',async (input:any)=>{
  const user=await axios.put(`${api}/users/${input._id}`,input,{headers:{
    'x-access-token':`${token}`
  }})
  return user.data
})

//////////////////////////////////// ORDENES /////////////////////////////////////////////////////////

export const GETORDERS=createAsyncThunk('GET_ORDERS',async ()=>{
  const result=await axios.get(`${api}/orders`,{headers:{
    'x-access-token':`${token}`
  }})
  return result.data
})


export const CREATEORDER=createAsyncThunk('CREATE_ORDER',async (data:any)=>{
  const result=await axios.post(`${api}/orders`,data,{headers:{
    'x-access-token':`${token}`
  }})
  return result.data._id

})

export const PAYORDER=createAsyncThunk('PAY_ORDER',async (data:any)=>{
  const result=await axios.post(`${api}/orders/pay`,data,{headers:{
    'x-access-token':`${token}`
  }})
  return result.data
})

export const GETORDER=createAsyncThunk('GET_ORDER',async (id: string | undefined)=>{
  const result=await axios.get(`${api}/orders/${id}`,{headers:{
    'x-access-token':`${token}`
  }}) 
  return result.data
})




