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
       
        setInput((prev) => ({...prev, [e.target.name]:e.target.value}))

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
                        <TextField name='email' label='correo' value={input.email} onChange={(e)=>handleChange(e)} variant="filled" fullWidth></TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField name='password' label='contraseña' value={input.password} onChange={(e)=>handleChange(e)} type='password' variant="filled" fullWidth></TextField>
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