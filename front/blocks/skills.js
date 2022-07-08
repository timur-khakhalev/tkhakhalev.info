import { useGridContext } from '@/context/fetched-data'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import LinearProgress from '@mui/material/LinearProgress'
import HardSkills from '@/components/hard-skills'

export default function Skills ({ language }) {

  const data = useGridContext()
  if (data.name) {
    return (
      <Box sx={{width: '100%', height: '100%', m: '0em auto 1em'}}>
        <Paper sx={{ m: '1em auto', p: '1em'}}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant='h4' gutterBottom>
                {language === 'en' ? 'Skills' : 'Навыки'}
              </Typography>
              <Box>
                <HardSkills hardSkills={data.hardSkills}/>
              </Box>
              <Box>
                <Typography variant='h6' gutterBottom>
                  Soft skills
                </Typography>
                <Grid container>
                  {data.softSkills[language].split(';').map(skill => {
                    return (
                      <Grid key={skill} item xs={12}>
                        —  {skill}
                      </Grid>
                    )
                  })}
                </Grid>
              </Box>
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
