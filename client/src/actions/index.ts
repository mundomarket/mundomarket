import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
const api='http://localhost:3000'

export const GETPRODUCTS=createAsyncThunk('GET_PRODUCTS',async ()=>{
    const result=await axios(`${api}/products`)
    return result.data
})



export function geProducts() {
    return async function (dispatch:any) {
      var json = await axios.get("http://localhost:3001/products"); //LA RUTA QUE ME CREE EN EL BACK que trae todas los pokemons
      return dispatch({
        type: "GET_PRODUCTS",
        payload: json.data,
      });
    };
}