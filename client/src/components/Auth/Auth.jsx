import React from 'react'
import { Avatar, Container, Grid, Paper, Typography } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen'

import { styles } from './styles'

function Auth() {
  const state = null
  const isSignup = false

  function handleSubmit() {

  }

  return (
    <Container component='main' maxWidth='xs'>
      <Paper sx={styles.paper} elevation={3}>
        <Avatar sx={styles.avatar}>
          <LockOpenIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form style={styles.form} onSubmit={handleSubmit}>
          <Grid>

          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth