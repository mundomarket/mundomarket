import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';


export default function InputAdornments() {

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <div>
        <FormControl fullWidth sx={{ m: 1, width: '20vw' }}>
          <InputLabel htmlFor="outlined-adornment-amount">Precio</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            onChange={()=>{}}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </div>
    </Box>
  );
}
