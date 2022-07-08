import { useGridContext } from '@/context/fetched-data'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import LinearProgress from '@mui/material/LinearProgress'

export default function JobExperience ({ language }) {

  const data = useGridContext()
  if (data.name) {
    return (
      <Box sx={{width: '100%', height: '100%', m: '0em auto 1em'}}>
        <Paper sx={{ m: '1em auto', p: '1em'}}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant='h4' gutterBottom>
                {language === 'en' ? 'Last job experience' : 'Прошлый опыт'}
              </Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableBody>
                    {data.jobExperience.map((job) => (
                      <TableRow
                        key={job.company[language]}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {job.company[language]}
                        </TableCell>
                        <TableCell align="left">{job.date[language]}</TableCell>
                        <TableCell align="left">{job.description[language]}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
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
