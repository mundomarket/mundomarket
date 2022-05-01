import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const api = "http://localhost:3000";

export const GETPRODUCTS = createAsyncThunk("GET_PRODUCTS", async () => {
  const result = await axios(`${api}/products`);
  return result.data;
});

export const GETFILTER = createAsyncThunk("GET_FILTER", async (name, value) => {
  const result = await axios(
    `${api}/products?filterName=${name}&filterOrder=${value}&names={stock}&sort=1`
  );
  return result.data;
});
