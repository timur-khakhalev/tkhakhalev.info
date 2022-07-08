import { useGridContext } from '@/context/fetched-data'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import LinearProgress from '@mui/material/LinearProgress'

export default function About ({ language }) {

  const data = useGridContext()
  if (data.name) {
    return (
      <Box sx={{width: '100%', height: '100%', m: '0em auto 1em'}}>
        <Paper sx={{ m: '1em auto', p: '1em'}}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant='h4' gutterBottom>
                {language === 'en' ? 'About me' : 'Обо мне'}
              </Typography>
              <Typography variant='h6'>
                {data.about[language]}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    )
  } else
    return (
      <Box sx={{m: '1em auto'}}>
        <LinearProgress/>
      </Box>
    )
}
