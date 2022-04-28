import React from 'react';
import { useDispatch } from 'react-redux';
import {GETPRODUCTS} from  '../actions/index'
import { AppDispatch } from '../store';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default function Landing() {
    const dispatch=useAppDispatch()
    return (
      <div>
          <h1>X</h1>
          <button onClick={()=>{dispatch(GETPRODUCTS())}}>A</button>
      </div>

    );
};