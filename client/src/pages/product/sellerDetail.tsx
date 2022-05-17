//import { ShopLayout } from '../../components/layouts/ShopLayout';
import { Avatar, Box , Typography, Button, Divider, Container,Rating} from '@mui/material';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import '@fontsource/roboto/300.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


const sellerDetail = () => {

    return (
        <Container sx={{m:0,display:'flex',justifyContent:'space-around'}}>
            <Box sx={{m:1,border:'1px solid gray',p:1,borderRadius:3,display:'flex',maxWidth:400,bgcolor:'white',boxShadow:2}}>
                <Avatar alt='Nico Amicone' sx={{m:'auto',marginLeft:1,marginRight:2,height:45,width:45}}/>
                <Divider orientation="vertical" flexItem />
                    <Box sx={{display:'flex'}}>
                        <Box sx={{marginLeft:2,display:'flex',flexDirection:'column'}}>
                            <Typography sx={{fontSize:'120%'}}>Nico Amicone</Typography>
                                <Box sx={{display:'flex',alignItems:'center'}}>
                                    <FmdGoodOutlinedIcon/>
                                    <Typography sx={{fontSize:'120%'}}>Tucumán</Typography>
                                </Box>
                            <Rating defaultValue={5} readOnly/>
                        </Box>
                    </Box>
                    <Button sx={{m:'auto',marginRight:1}}><InfoOutlinedIcon sx={{m:1}}/>Información</Button>
            </Box>
        </Container>
    )
}

export default sellerDetail