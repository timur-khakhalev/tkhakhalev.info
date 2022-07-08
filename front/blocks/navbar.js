import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { useEffect, useState } from 'react'

export default function Navbar ({ passLanguage }) {
  const [language, setLanguage] = useState(false)

  const handleLanguage = (condition) => {
    condition === 'en' ? setLanguage(false) : setLanguage(true)
    passLanguage(condition)
  }

  useEffect(() => {
    passLanguage('en')
  }, [])
  return(
    <Box sx={{ zIndex: '999', flexGrow: 1, m: '0 auto', py: '1em', position: 'fixed', top: '0', color: '#fff', width: 'auto'}}>
      <Paper sx={{ p: '1em'}}>
        <ButtonGroup>
          <Button onClick={() => handleLanguage('en')} variant={language ? 'outlined' : 'contained'}>EN</Button>
          <Button onClick={() => handleLanguage('ru')} variant={language ? 'contained' : 'outlined'}>RU</Button>
        </ButtonGroup>
      </Paper>
    </Box>
  )
}
