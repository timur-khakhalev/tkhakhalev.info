import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'

export default function Auth ({ logHandler }) {

  const router = useRouter()

  const handleAuth = async () => {
    try {
      const res = await axios({
        method: 'POST',
        url: `${process.env.BACKEND_URL}/login`,
        data: creds
      })
      localStorage.setItem('accessToken', res.data.accessToken)
      logHandler({ type: 'success', msg: 'Login success', status: res.status })
      router.reload()
    } catch (e) {
      console.log(e.response.data.trace[0])
      logHandler({ type: 'error', msg: e.response.data.trace[0], status: e.response.status })
    }
  }

  const [creds, setCreds] = useState({})

  const handleFormChange = (e) => {
    const key = e.target.name
    const value = e.target.value
    setCreds(prev => ({...prev, [key]: value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await handleAuth()
  }
  return (
    <Box sx={{m: '0 auto', width: '20vw'}}>
      <Paper sx={{m: '1em', p: '1em', width: 'auto'}}>
        <Stack>
          <Typography variant="h6" color="initial" align="center">
            THA GATES
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              id="login"
              label="Login"
              margin="dense"
              type="login"
              name='username'
              value={creds.username || ''}
              onChange={handleFormChange}
            />
            <TextField
              id="password"
              label="Password"
              margin="dense"
              name='password'
              type="password"
              value={creds.password || ''}
              onChange={handleFormChange}
            />
            <Button type="submit">
              Send
            </Button>
          </form>
        </Stack>
      </Paper>
    </Box>
  )
}
