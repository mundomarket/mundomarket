import * as React from 'react';
import { TextField,Box,InputLabel,OutlinedInput,InputAdornment,MenuItem } from '@mui/material';
import './index.css'
import { useState } from 'react';
import axios from 'axios';

const regex=/^[0-9]+$/

export default function FormP() {
  const currencies = [
    {
      value: 'tecnologia',
      label: 'Tecnologia',
    },
    {
      value: 'ropa',
      label: 'Ropa',
    },
    {
      value: 'cuidado personal',
      label: 'Cuidado Personal',
    },
    {
      value: 'deporte',
      label: 'Deportes',
    },
  ];
  const [input,setInput]=useState({title:'',price:'',category:'Select',description:'',stock:0,imageProduct:[''],review:0,rating:0,envio:'coordinar'})

  const validate=(e:any)=>{
    if(e.target.name==='title'){
      setInput((input)=>({...input,title:e.target.value}))
    }
    if(e.target.name==='precio'){
      if(regex.test(e.target.value))setInput((input)=>({...input,price:e.target.value}))
    }
    if(e.target.name==='description'){
      setInput((input)=>({...input,description:e.target.value}))
    }
    if(e.target.name==='category'){
      setInput((input)=>({...input,category:e.target.value}))
    }
    if(e.target.name==='category'){
      setInput((input)=>({...input,imageProduct:[e.target]}))
    }
  }

  return (
      <div id='formnuevop'>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={()=>{
              axios.post('https://mundomarket.herokuapp.com/products',input)
            }}
          >
            <TextField id="formtitle" label="Nombre" variant="outlined" name='title' value={input.title}
            onChange={(e)=>validate(e)}/>

            <TextField id="formprecio" label="Precio" variant="outlined" 
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            name='precio' value={input.price}
            onChange={(e)=>validate(e)}/>

            <TextField
              id="formcats"
              select
              label="Categorias"
              value={input.category}
              onChange={(e)=>validate(e)}
              name='category'
            >
              <MenuItem key='select' value='Select'>
                  Select
                </MenuItem>
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField id="formdesc" label="Descripcion" variant="outlined" name='description' value={input.description}
            onChange={(e)=>validate(e)}/>

            <button type='submit' >Subir</button>

          </Box>
      </div>
  );
}
