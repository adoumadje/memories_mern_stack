import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import moment from 'moment'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import DeleteIcon from '@mui/icons-material/Delete'

import { styles } from './styles'

function Post({post}) {
  return (
    <Card sx={styles.card}>
      <CardMedia sx={styles.media} image={post.selectedFile} title={post.title} />
      <div style={styles.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div style={styles.overlay2}>
        <Button style={{color: 'white'}} size='small' onClick={() => {}}>
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>
      <div style={styles.details}>
        <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <CardContent>
        <Typography sx={styles.title} variant='h5' gutterBottom>{post.message}</Typography>
      </CardContent>
      <CardActions sx={styles.cardActions}>
        <Button>
          <ThumbUpIcon fontSize='small' />
          Like 
          {post.likeCount}
        </Button>
        <Button>
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post