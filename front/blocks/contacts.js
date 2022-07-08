import { useGridContext } from '@/context/fetched-data'
import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import copy from 'clipboard-copy'
import { Telegram, Email, GitHub, LinkedIn, Link} from '@mui/icons-material'
import { calculateAge } from '@/utils/calculate-age'
import LinearProgress from '@mui/material/LinearProgress'


export default function Contacts ({ language }) {

  const data = useGridContext()
  useEffect(() => {
    language = 'en'
  }, [language])

  const getAge = (language, data) => {
    const calculatedAge = {
      en: `${calculateAge(data.age)} years old`,
      ru: `${calculateAge(data.age)} лет`
    }

    return calculatedAge[language]
  }

  const [tooltipValue, setTooltipValue] = useState(false)

  const handleCopyEmail = () => {
    copy(data.email)
    setTooltipValue(true)
  }

  if (data.name) {
    const age = getAge(language, data)
    return (
        <Box sx={{width: '100%', height: '100%', m: '7em auto 1em'}}>
          <Paper sx={{ m: '1em auto', p: '1em'}}>
            <Grid container>
              <Grid item xs={8}>
                <Typography variant='h4' gutterBottom>
                  {data.name[language]}, {data.position}
                </Typography>
                <Typography variant='h6'>
                  {age}
                </Typography>
                <Typography variant='h6'>
                  {data.location[language]}
                </Typography>
                <Typography variant='h6'>
                  {data.education[language]}
                </Typography>
                <Typography gutterBottom variant='h6'>
                  <Button
                    size="small"
                    variant='contained'
                    startIcon={< Telegram />}
                    color='primary'
                    href={`https://t.me/${data.telegram}`}>{data.telegram}</Button>
                </Typography>
                <Typography gutterBottom variant='h6'>
                  <Tooltip disableFocusListener placement="top" title={tooltipValue ? 'Copied' : 'Copy'}>
                    <Button
                      size="small"
                      variant='contained'
                      startIcon={< Email />}
                      color='primary'
                      onClick={handleCopyEmail}>{data.email}</Button>
                  </Tooltip>
                </Typography>
                <Typography gutterBottom variant='h6'>
                  <Button
                    size="small"
                    variant='contained'
                    startIcon={<LinkedIn/>}
                    color='primary'
                    href={`${data.linkedin}`}>LinkedIn</Button>
                </Typography>
                <Typography gutterBottom variant='h6'>
                  <Button
                    size="small"
                    variant='contained'
                    startIcon={<Link/>}
                    color='primary'
                    href={`${data.headhunter}`}>HeadHunter</Button>
                </Typography>
                <Typography gutterBottom variant='h6'>
                  <Button
                    size="small"
                    variant='contained'
                    startIcon={< GitHub />}
                    color='primary'
                    href={`${data.github}`}>{data.github.replace('https://', '')}</Button>
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Box>
                  <img src={`${process.env.FRONT_URL}/${data.photo}`} width='100%'/>
                </Box>
              </Grid>
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
