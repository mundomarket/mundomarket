import * as React from 'react';
import { TextField,Box,InputLabel,OutlinedInput,InputAdornment,MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { POSTPRODUCT } from '../../actions/index';
import { useDispatch , useSelector } from "react-redux"
import { Link ,  useNavigate } from "react-router-dom"
import { AppDispatch } from '../../store';



const regex=/^[0-9]+$/

export default function FormP() {

    

    const useAppDispatch = () => useDispatch<AppDispatch>()

    const dispatch = useAppDispatch()

    const navigate = useNavigate()
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

  const [input,setInput]=useState({name:'',price:'',category:'Select',description:'',stock:0,imageProduct:[""],review:0,rating:0,envio:'coordinar'})

  const validate=(e:any)=>{
    if(e.target.name==='title'){
      setInput((input)=>({...input,name:e.target.value}))
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
    if(e.target.name==='imageProduct'){
        //setInput((input)=>({...input,imageProduct:e.target.value}))
        setInput((input)=>({...input,imageProduct:[e.target.value]}))
      }
  }

  function handleSubmit(e:any){
    e.preventDefault()
    if(!input.name){
        return alert("El Producto necesita un nombre")
    }/* else if(!input.){
        e.preventDefault()
       return alert("Necesitas agregar por lo menos 1 tipo al Pokemon")
    }
     */

    else if(!input.imageProduct[0]){
        setInput((input)=>({...input,imageProduct:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9nzwwI9EeHkX1U4vQ5LRx2yefOZ-WhOD_tQ&usqp=CAU"]}))
    }

    
        const newPost=input
        
        dispatch(POSTPRODUCT(newPost))
        alert("Se creo el Producto exitosamente!")

        navigate("/home")
        
}

  return (
      <div id='formnuevop'>

        <Typography>CARGA TU PRODUCTO</Typography>

          <Box
            display='flex' flexDirection='column'
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="formtitle" label="Nombre" variant="outlined" name='title' value={input.name}
            onChange={(e)=>validate(e)}/>

            <TextField id="formprecio" label="Precio" variant="outlined" 
                InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                name='precio' value={input.price}
                onChange={(e)=>validate(e)}
            />

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
            

            <TextField id="formimage" label="imagen" variant="outlined" name='imageProduct' value={input.imageProduct}
            onChange={(e)=>validate(e)}/>
            
            {/*<input type="file" name="imagen" />*/}

            <button disabled={input.name==""?true:false}  type="submit" onClick={(e) => handleSubmit(e)}>Crear Producto</button>
          </Box>
      </div>
  );

}
