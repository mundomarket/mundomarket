import { Grid, Box , Typography, Button, Chip, Container, Avatar, Divider} from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch,RootState } from '../../store/index';
import { Link,NavLink } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import EditIcon from '@mui/icons-material/Edit';
import KeyIcon from '@mui/icons-material/Key';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const useAppDispatch = () => useDispatch<AppDispatch>();


//const product =  initialData.products[0];

const Profile = () => {
    return(
        <Container sx={{m:'auto',display:'flex',flexDirection:'column',bgcolor:'transparent',width:500}}>
            <Box sx={{m:1,border:'1px solid gray',p:1,borderRadius:3,display:'flex',bgcolor:'white',boxShadow:2}}>
                <Avatar alt='Nico Amicone' sx={{m:1,marginRight:2,height:45,width:45}}/>
                <Divider orientation="vertical" flexItem />
                <Box sx={{m:'auto'}}>
                <Typography variant='h4'>Nico Amicone</Typography>
                </Box>
            </Box>
            <Box className='LinkedBlack' sx={{m:1,border:'1px solid gray',p:1,borderRadius:3,display:'flex',flexDirection:'column',bgcolor:'white',boxShadow:2}}>
                
                <Link to='/home'>
                <Box sx={{display:'flex'}}>
                <EditIcon sx={{m:1,marginRight:2,height:30,width:30,color:'black'}}/>
                <Box sx={{marginLeft:1,display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                <Typography variant='h6'>Mis Datos</Typography>
                <Typography variant='subtitle2'>Lee o modifica tus datos</Typography>
                </Box>
                </Box>
                </Link>
                <Divider/>

                <Box sx={{display:'flex'}}>
                <KeyIcon sx={{m:1,marginRight:2,height:30,width:30}}/>
                <Box sx={{marginLeft:1,display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                <Typography variant='h6'>Seguridad</Typography>
                <Typography variant='subtitle2'>Modificar contraseña</Typography>
                </Box>
                </Box>

                <Divider/>

                <Box sx={{display:'flex'}}>
                <LocalMallIcon sx={{m:1,marginRight:2,height:30,width:30}}/>
                <Box sx={{marginLeft:1,display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                    {/*to={`/product/${product._id}`}*/}
                    <NavLink to='/history/345345' style={isActive => ({color: isActive ? "black" : "black"})}>
                        <Typography variant='h6'>Mis Compras</Typography>
                    </NavLink>
                <Typography variant='subtitle2'>Ver el historial o estado de mis compras</Typography>
                </Box>
                </Box>

                <Divider/>

                <Box sx={{display:'flex'}}>
                <CreditCardIcon sx={{m:1,marginRight:2,height:30,width:30}}/>
                <Box sx={{marginLeft:1,display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                <Typography variant='h6'>Mis Tarjetas</Typography>
                <Typography variant='subtitle2'>Gestionar medios de pago</Typography>
                </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Profile