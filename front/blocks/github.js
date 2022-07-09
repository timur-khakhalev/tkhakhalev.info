import { useState, useEffect } from 'react'
import axios from 'axios'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import LinearProgress from '@mui/material/LinearProgress'
import { GitHub } from '@mui/icons-material'
import Button from '@mui/material/Button'

export default function Github ({ language }) {

  const [data, setData] = useState({})

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`${process.env.BACKEND_URL}/github`)
        setData(data)
      } catch (e) {
        console.log(e)
      }
    }
    fetch()
  }, [])

  if (data.length > 0) {
    return (
      <Box sx={{ width: '100%', height: '100%', m: '0em auto 1em' }}>
        <Paper sx={{ m: '1em auto', p: '1em' }}>
          <Typography variant='h4' gutterBottom>
            { language === 'en' ? 'Portfolio' : 'Портфолио'}
          </Typography>
          <Grid container justifyContent="center" alignItems="center">
            {data.map(repo => {
              return (
                <Grid key={repo.name} item xs={12} sm={12} md={4} sx={{ m: '1em'}}>
                  <Card sx={{ minHeight: '15em', maxHeight: '20em'}}>
                    <CardContent>
                      <Typography variant='h6' gutterBottom>
                        <Button
                          size="small"
                          variant='contained'
                          startIcon={< GitHub />}
                          color='primary'
                          href={`${repo.html_url}`}>{repo.name}</Button>
                      </Typography>
                      <Typography variant='subtitle2'>
                        {repo.language}
                      </Typography>
                      <Typography variant='caption'>
                        Commits: {repo.commits_count}, last update at {new Date(repo.updated_at).toLocaleDateString()}
                      </Typography>
                      <Box>
                        {repo.topics.map(topic => {
                          return (
                            <Chip sx={{my: '.5em', mr: '.5em'}} key={topic} label={topic}/>
                          )
                        })}
                      </Box>
                      <Typography variant='body'>
                        {repo.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Paper>
      </Box>
    )
  } else {
    return (
      <Box sx={{m: '1em auto'}}>
        <LinearProgress/>
      </Box>
    )
  }
}
