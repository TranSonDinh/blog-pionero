import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'

const AuthorInfo = ({name, urlAvatar, mobile, postCount, likeCount}) => {
  return (
    <Stack alignItems="center" mt={2} mb={4}>
        <Stack sx={{p: 2, alignItems:"center", borderRadius: 5, border: `1px solid #000`, minWidth: 400}}>
            <Avatar src={urlAvatar} sx={{width: 50, height: 50}}/>
            <Typography variant='h3'>{name}</Typography>
            <Typography>{`Mobile: ${mobile}`}</Typography>
            <Typography>{`POSTS: ${postCount}`}</Typography>
            <Typography>{`LIKES: ${likeCount}`}</Typography>
        </Stack>
    </Stack>
  )
}

export default AuthorInfo
