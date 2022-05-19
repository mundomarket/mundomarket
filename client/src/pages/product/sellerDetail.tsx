//import { ShopLayout } from '../../components/layouts/ShopLayout';
import { Avatar, Box , Typography, Button, Divider, Container,Rating} from '@mui/material';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import '@fontsource/roboto/300.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


const sellerDetail = ({seller}:any) => {
    console.log(seller)
    return (
        <Container sx={{m:0,display:'flex',justifyContent:'space-around'}}>
            <Box sx={{m:1,border:'1px solid gray',width:'100%',p:1,borderRadius:3,display:'flex',maxWidth:400,bgcolor:'white',boxShadow:2}}>
                <Avatar src={seller?.avatar} alt='$' sx={{m:'auto',marginLeft:1,marginRight:2,height:45,width:45}}/>
                <Divider orientation="vertical" flexItem />
                    <Box sx={{display:'flex'}}>
                        <Box sx={{marginLeft:2,display:'flex',flexDirection:'column'}}>
                            <Typography sx={{fontSize:'120%'}}>{seller?.name}</Typography>
                                <Box sx={{display:'flex',alignItems:'center'}}>
                                    <FmdGoodOutlinedIcon/>
                                    <Typography sx={{fontSize:'120%'}}>{seller?.city}</Typography>
                                </Box>
                        </Box>
                    </Box>
            </Box>
        </Container>
    )
}

export default sellerDetail