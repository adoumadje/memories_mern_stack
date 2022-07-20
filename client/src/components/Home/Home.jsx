import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'

import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import { getPosts } from '../../actions/posts'
import { styles } from './styles'

function Home() {
    const [currentId, setCurrentId] = useState(null)
    const [renderChanges, setRenderChanges] = useState()
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(getPosts())
    }, [currentId, renderChanges, dispatch])
  
  
  return (
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
  )
}

export default Home