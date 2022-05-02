import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export default function CampoSimple(props:any) {
  return (
        <TextField
          //error
          id="camposimple"
          label={props.nombre}
          defaultValue=""
        />)
}
