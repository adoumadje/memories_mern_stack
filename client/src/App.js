import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/posts'
import memories from './components/images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

import { styles } from './styles'

function App() {
  const [currentId, setCurrentId] = useState(null)
  const [renderChanges, setRenderChanges] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, renderChanges, dispatch])


  return (
    <Container maxWidth='lg'>
      <AppBar sx={styles.appBar} position='static' color='inherit'>
        <Typography sx={styles.heading} variant='h2' align='center'>Memories</Typography>
        <img sx={styles.image} src={memories} alt='memories' height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container sx={styles.mainContainer} justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setRenderChanges={setRenderChanges} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App