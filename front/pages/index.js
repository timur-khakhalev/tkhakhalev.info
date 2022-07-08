import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Contacts from '@/blocks/contacts'
import JobExperience from '@/blocks/job-experience'
import HeadHtml from '@/blocks/head'
import About from '@/blocks/about'
import Navbar from '@/blocks/navbar'
import Skills from '@/blocks/skills'
import Github from '@/blocks/github'

export default function Home() {
  const [language, setLanguage] = useState('')

  const passLanguage = (lang) => {
    setLanguage(lang)
  }

  const theme = createTheme({
    palette: {
      background: {
        default:"#f3f3f3"
      },
      primary: {
        main: '#000',
      },
      secondary: {
        main: '#0288d1',
      },
      info: {
        main: '#fff'
      }
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <HeadHtml/>
      <Container>
        <Navbar passLanguage={ passLanguage }/>
        <Contacts language={language}/>
        <JobExperience language={language}/>
        <About language={language}/>
        <Skills language={language}/>
        <Github language={language}/>
      </Container>
    </ThemeProvider>
  )
}
