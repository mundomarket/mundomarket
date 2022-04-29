import { Typography, Grid } from '@mui/material';



export const OrderSumary= ()=> {
    return(
        <Grid container>

            <Grid item xs={6}>
                <Typography> No. Productos</Typography>
            </Grid>

            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography> 3 items</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography> Subtotal</Typography>
            </Grid>

            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography>{`$${155.36}`}</Typography>
            </Grid>

            
            <Grid item xs={6} sx={{mt:2}}>
                <Typography variant='subtitle1'>Total:</Typography>
            </Grid>

            <Grid item xs={6} sx={{mt:2}} display='flex' justifyContent='end'>
                <Typography variant='subtitle1'>{`$${155.36}`}</Typography>
            </Grid>


        </Grid>

    )
}