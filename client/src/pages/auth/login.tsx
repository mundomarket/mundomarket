import { Box,Divider, Typography, TextField, Button } from '@mui/material';
import { AuthLayout } from '../../components/layouts';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import '@fontsource/roboto/300.css';



const LoginPage = () => {
    const navigate=useNavigate()
    return(
            <AuthLayout title ={'Ingresar'}>
            <Box sx={{display:'flex',flexDirection:'column',border:'1px solid gray',borderRadius:2,width:{xs:200,sm:320},bgcolor:'white',boxShadow:10}}>
                <Typography sx={{m:3,fontSize:{xs:25,sm:30}}}>MundoMarket</Typography>
                <TextField label='Correo' variant="outlined"  size='small' sx={{marginY:1,marginX:{xs:2,sm:4}}}></TextField>
                <TextField label='Contraseña' type='password' variant="outlined"  size='small' sx={{marginY:1,marginX:{xs:2,sm:4}}}></TextField>
                <Button color = "primary" className='circular-btn' size='small' sx={{marginY:1,marginX:{xs:2,sm:4}}}>
                    Ingresar
                </Button>
                <Button color = "secondary" className='circular-btn' size='small' sx={{marginY:1,marginX:{xs:2,sm:4}}}
                onClick={()=>navigate('/home')}>
                    Entrar como Invitado
                </Button>
                <Divider>o</Divider>
                
                <Typography fontSize={14}>Olvidaste tu Contraseña?</Typography>
                <Typography fontSize={14} sx={{marginBottom:1}}>No tienes cuenta? <Link to='/register'>Crear</Link></Typography>
            </Box>
        </AuthLayout>
    )
}

export default LoginPage