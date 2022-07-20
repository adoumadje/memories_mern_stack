import React from 'react'
import { AppBar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import memories from '../images/memories.png'
import { styles } from './styles'

function Navbar() {
  return (
    <AppBar sx={styles.appBar} position='static' color='inherit'>
        <div style={styles.brandContainer}>
            <Typography sx={styles.heading} variant='h2' align='center'>Memories</Typography>
            <img sx={styles.image} src={memories} alt='memories' height='60' />
        </div>
    </AppBar>
  )
}

export default Navbar