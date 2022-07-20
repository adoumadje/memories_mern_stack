import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import Navbar from './components/Navbar/Navbar'

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
      <Navbar />
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