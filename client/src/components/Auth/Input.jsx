import React from 'react'
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';

function Input({name, label, handleChange, autoFocus, type, handleShowPassword, half}) {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField
            name={name}
            label={label}
            onChange={handleChange}
            variant='outlined'
            autoFocus={autoFocus}
            type={type}
            required 
            fullWidth
            InputProps={name === 'password' && {
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton onClick={handleShowPassword}>
                            {type === 'password' ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    </Grid>
  )
}

export default Input