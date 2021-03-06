import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import moment from 'moment'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'

import { styles } from './styles'
import { deletePost, likePost } from '../../../actions/posts'

function Post({post, setCurrentId, setRenderChanges}) {
  const dispatch = useDispatch()

  return (
    <Card sx={styles.card}>
      <CardMedia sx={styles.media} image={post.selectedFile} title={post.title} />
      <div style={styles.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div style={styles.overlay2}>
        <Button style={{color: 'white'}} size='small' onClick={() => { setCurrentId(post._id) }}>
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>
      <div style={styles.details}>
        <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography sx={styles.title} variant='h5' gutterBottom>{post.title}</Typography>
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>{post.message}</Typography>
      </CardContent>
      <CardActions sx={styles.cardActions}>
        <Button onClick={() => {
            dispatch(likePost(post._id))
            setRenderChanges(Math.random())
        }}>
          <ThumbUpIcon sx={{marginRight: 1}} fontSize='small' />
          {post.likeCount}&nbsp;
          Like
        </Button>
        <Button onClick={() => {
            dispatch(deletePost(post._id))
            setRenderChanges(Math.random())
        }}>
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post