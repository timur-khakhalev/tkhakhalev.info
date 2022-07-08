import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

export default function hardSkills ({ hardSkills }) {
    return (
            <div>
              <Box sx={{ m: '1em auto' }}>
                <Typography variant='h6'>
                  Stack
                </Typography>
                <Grid container>
                  {hardSkills.stack.split(';').map(skill => {
                    return (
                      <Grid item key={skill} xs={6} sm={2}>
                        <Typography variant='subtitle1'>
                          {skill}
                        </Typography>
                      </Grid>
                    )
                  })}
                </Grid>
              </Box>
              <Box sx={{ m: '1em auto' }}>
                <Typography variant='h6'>
                  Technologies
                </Typography>
                <Grid container>
                  {hardSkills.technologies.split(';').map(skill => {
                    return (
                      <Grid item key={skill} xs={6} sm={2}>
                        <Typography variant='subtitle1'>
                          {skill}
                        </Typography>
                      </Grid>
                    )
                  })}
                </Grid>
              </Box>
              <Box sx={{ m: '1em auto' }}>
                <Typography variant='h6'>
                  Patterns
                </Typography>
                <Grid container>
                  {hardSkills.patterns.split(';').map(skill => {
                    return (
                      <Grid item key={skill} xs={6} sm={2}>
                        <Typography variant='subtitle1'>
                          {skill}
                        </Typography>
                      </Grid>
                    )
                  })}
                </Grid>
              </Box>
              <Box sx={{ m: '1em auto' }}>
                <Typography variant='h6'>
                  Instruments
                </Typography>
                <Grid container>
                  {hardSkills.instruments.split(';').map(skill => {
                    return (
                      <Grid item key={skill} xs={6} sm={2}>
                        <Typography variant='subtitle1'>
                          {skill}
                        </Typography>
                      </Grid>
                    )
                  })}
                </Grid>
              </Box>
            </div>
    )
}
