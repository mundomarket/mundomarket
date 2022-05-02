import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const api = "http://localhost:3000";

export const GETFILTER = createAsyncThunk(
  "GET_FILTER",
  async (params: any | undefined) => {
    const result = await axios(
      `${api}/http://localhost:3000/products?filterName=${name}&filterOrder=${value}&names=${articulo}&sort=${1}`
    );

    return result.data;
  }
);

export const GETPRODUCTS = createAsyncThunk("GET_PRODUCTS", async () => {
  const result = await axios(`${api}/products`);
  return result.data;
});

export const GETDETAIL = createAsyncThunk(
  "GET_DETAIL",
  async (id: string | undefined) => {
    const result = await axios(`${api}/products/${id}`);
    return result.data;
  }
);

/*

export function geProducts() {
    return async function (dispatch:any) {
      var json = await axios.get("http://localhost:3001/products"); 
      return dispatch({
        type: "GET_PRODUCTS",
        payload: json.data,
      });
    };
}*/