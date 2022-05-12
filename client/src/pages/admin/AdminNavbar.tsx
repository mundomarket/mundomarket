
import { useContext } from 'react';
//import NextLink from 'next/link';
import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AdminNavbar = () => {


    

    return (
        <AppBar>
            <Toolbar>
                <NavLink to='/home' >
                    <Link display='flex' alignItems='center'>
                        <Typography variant='h6'>Mundo Market|</Typography>
                        <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                    </Link>  
                </NavLink>

                <Box flex={ 1 } />

                <Button  >
                    Menú
                </Button>

            </Toolbar>
        </AppBar>
    )
}