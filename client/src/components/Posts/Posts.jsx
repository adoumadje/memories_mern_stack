import React from 'react'
import { useSelector } from 'react-redux'
import { CircularProgress, Grid } from '@mui/material'

import Post from './Post/Post'
import { styles } from './styles'


function Posts({setCurrentId}) {
  const posts = useSelector((state) => state.posts)

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid sx={styles.mainContainer} container alignItems='stretch' spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post setCurrentId={setCurrentId} post={post} />
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Posts