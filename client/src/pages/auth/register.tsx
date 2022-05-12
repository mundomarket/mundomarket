import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import { AuthLayout } from '../../components/layouts';
import {Link} from 'react-router-dom'
import {useDispatch} from "react-redux"
import {REGISTERUSER} from "../../actions/index"
import {useState} from "react"
import { AppDispatch,RootState } from '../../store/index';


const useAppDispatch = () => useDispatch<AppDispatch>();


const RegisterPage = () => {
    const [input,setInput]=useState({
        email:"",
        password:"",
        name:""
    })
    const [error,setError]=useState({email:false,password:false})
    
    const dispatch=useAppDispatch()

    const handleSubmit=(e:any)=>{
        e.preventDefault()
        dispatch(REGISTERUSER(input))
        setInput({
            email:"",
            password:"", 
            name:""
            
        })
    }
    const handleChange=(e:any)=>{
        e.preventDefault();
        setError(()=>({email:false,password:false}))
        const rgmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        const rgpassword=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        setInput((prev) => ({...prev, [e.target.name]:e.target.value}))
        if(e.target.name==='email'){
            if(!rgmail.test(e.target.value))setError((old)=>({...old,email:true}))
        }
        if(e.target.name==='password'){
            if(!rgpassword.test(e.target.value))setError((old)=>({...old,password:true}))
        }

    }
    return(
        <AuthLayout title ={'Ingresar'} >
            <Box sx={{width:350, padding:'10px 20px'}} >
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <Typography variant='h1'>Crear Cuenta</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField name='name' label='Nombre' value={input.name} onChange={(e)=>handleChange(e)} variant="filled" fullWidth></TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField error={error.email} name='email' label='correo' value={input.email} onChange={(e)=>handleChange(e)} variant="filled" fullWidth></TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField error={error.password} name='password' label='contraseña' value={input.password} onChange={(e)=>handleChange(e)} type='password' variant="filled" fullWidth></TextField>
                        {error.password && <Typography sx={{color:"red",fontSize:12}}>Debe contener al menos 8 caracteres</Typography>}
                    </Grid>

                    <Grid xs={12} sx={{mt:3}} >
                        <Button onClick={(e)=>handleSubmit(e)} color = "secondary" className='circular-btn' size='large' fullWidth>
                            Crear
                        </Button>
                    </Grid>

                    <Grid item xs={12} display='flex' justifyContent='end'>
                        
                            <Link to='/login'>
                                ¿ya tenes una cuenta?
                            </Link>
                  
                    </Grid>

                </Grid>
                
            </Box>

        </AuthLayout>
    )
}

export default RegisterPage