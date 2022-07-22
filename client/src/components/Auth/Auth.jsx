import React from 'react'
import { Avatar, Button, Container, Grid, Paper, Typography } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen'

import { styles } from './styles'
import Input from './Input'
import { useState } from 'react'

function Auth() {
  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setIsSignup] = useState(false)

  function handleSubmit() {

  }

  function handleChange() {

  }

  function handleShowPassword() {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  function switchMode() {
    console.log('clicked');
    setIsSignup((prevIsSignup) => !prevIsSignup)
    setShowPassword(false)
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Paper sx={styles.paper} elevation={3}>
        <Avatar sx={styles.avatar}>
          <LockOpenIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form style={styles.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input name='firstname' label='First Name' handleChange={handleChange} autoFocus half />
                <Input name='lastname' label='Last Name' handleChange={handleChange}  half />
              </>
            )}
            <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
            <Input name='password' label='Password' handleChange={handleChange} 
                   type={showPassword ? 'text' : 'password'} 
                   handleShowPassword={handleShowPassword}
            />
            {isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary' sx={styles.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justifyContent='center'>
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? "Already have an account ? Sign In" : "Don't have an account ? Sign Up"  }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth