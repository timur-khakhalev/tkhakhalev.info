import { useGridContext } from '@/context/fetched-data'
import { Box, Button, Paper, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import jwt from 'jsonwebtoken'
import axios from 'axios'

export default function CMS ({ logHandler }) {
  const data = useGridContext()

  const [handledData, setHandledData] = useState({})

  const handleFormChange = (e) => {
    const key = e.target.name
    const value = e.target.value
    setHandledData(prev => ({...prev, [key]: value}))
  }

  const fetch = async (token, updData) => {
    try {
      const res = await axios({
        method: 'PUT',
        url: `${process.env.BACKEND_URL}/resume`,
        params: { id: data._id },
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: updData
      })
      logHandler({ type: 'success', msg: 'Updated success', status: res.status })
    } catch (e) {
      console.log(e)
      if (e.response) {
        console.log(e.response.data.trace[0])
        logHandler({ type: 'error', msg: e.response.data.trace[0], status: e.response.status })
      }
      else
        console.log(e)
    }
  }

  const updateResume = async () => {
    try {
      const dataToUpdate = {}
      Object.entries(handledData).forEach(([ k, v ]) => {
        dataToUpdate[k] = JSON.parse(v)
      })
      const token = localStorage.getItem('accessToken')
      if (token) {
        const decodedToken = jwt.decode(token)
        if (decodedToken) {
          if (new Date(decodedToken.exp * 1000) - new Date() > 0)
            await fetch(token, dataToUpdate)
        }
      }
    } catch (e) {
      logHandler({ type: 'error', msg: JSON.stringify(e), status: 500 })
      console.log(e)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateResume()
  }

  return (
    <Box sx={{m: '0 auto', width: '80vw'}}>
      <Paper sx={{m: '1em', p: '1em', width: 'auto'}}>
        <Stack>
          <form onSubmit={handleSubmit}>
            { Object.entries(data).map(([key, value]) => {
              if (key !== '_id' && key !== '__v')
                return (
                  <TextField
                    fullWidth
                    key={key}
                    label={key}
                    margin="dense"
                    name={key}
                    multiline
                    type="text"
                    value={handledData[key] || JSON.stringify(value)}
                    onChange={handleFormChange}
                  />
                )
            })}
            <Button
              sx={{display: 'block', m: '1em', zIndex: '999', position: 'fixed', right: '1em', bottom: '4em'}}
              color='info'
              variant='contained'
              width='4em'
              href={'/'}
              >
              Main
            </Button>
            <Button
              sx={{display: 'block', m: '1em', zIndex: '999', position: 'fixed', right: '1em', bottom: '0'}}
              color='primary'
              variant='contained'
              width='4em'
              type='submit'>
              Submit
            </Button>
          </form>
        </Stack>
      </Paper>
    </Box>
  )
}
