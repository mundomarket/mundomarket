import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {GETPRODUCTS} from  '../actions/index'
import { AppDispatch,RootState } from '../store';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default function Landing() {
    const dispatch=useAppDispatch();

    const productos=useSelector((state:RootState)=>state.rootReducer.productos)
    
    return (
      <div>
          <h1>X</h1>
          <button onClick={()=>{dispatch(GETPRODUCTS())}}>A</button>
          <button onClick={()=>{console.log(productos)}}>B</button>
      </div>

    );
};
