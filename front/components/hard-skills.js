import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

export default function hardSkills ({ hardSkills }) {
    return (
            <div>
              <Box sx={{ m: '1em auto' }}>
                <Typography variant='h6'>
                  Technologies stack
                </Typography>
                <Grid container>
                  {hardSkills.technologiesStack.split(';').map(skill => {
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
                  Standards
                </Typography>
                <Grid container>
                  {hardSkills.standards.split(';').map(skill => {
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
