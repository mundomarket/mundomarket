import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import { AuthLayout } from '../../components/layouts';
import {Link} from 'react-router-dom'



const LoginPage = () => {
    return(
        <AuthLayout title ={'Ingresar'}>
            <Box sx={{width:350, padding:'10px 20px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h1'>Iniciar Sesion</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField label='correo' variant="filled" fullWidth></TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField label='contraseña' type='password' variant="filled" fullWidth></TextField>
                    </Grid>

                    <Grid xs={12} sx={{mt:3}} >
                        <Button color = "secondary" className='circular-btn' size='large' fullWidth>
                            Ingresar
                        </Button>
                    </Grid>

                    <Grid item xs={12} display='flex' justifyContent='end'>
                        
                            <Link to='/register'>
                                No tienes cuenta?
                            </Link>
                        
                    </Grid>

                </Grid>
                
            </Box>

        </AuthLayout>
    )
}

export default LoginPage