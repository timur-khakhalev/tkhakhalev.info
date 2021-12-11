import {FC, useEffect} from 'react';
import axios from 'axios'
import {makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Box, CssBaseline, Grid, Paper, Container, useMediaQuery } from '@mui/material/';
import {Jobs} from '../Components/Jobs'
import {About} from '../Components/About';
import {Navbar} from '../Components/Navbar'
import {Skills} from '../Components/Skills';
import {Contacts} from '../Components/Contacts'
import {Portfolio} from '../Components/Portfolio'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../Redux/store'
import { itemsDelivery } from '../Redux/slice';


declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
    }
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
});

const printTheme = createTheme({
    palette: {
        background: {
            default: "#fff"
        },
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#fff',
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0 0 0',
                    margin: '1em',
                    padding: '0 .5em',
                    borderRadius: '0'
                }
            }
        }
    }
});

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    rooot: {
        margin: '0 auto'
    },
    mainP: {
        margin: '1em 1em 0 1em',
        padding: '1em'
    },
    mainPMobile: {
        margin: '1em 1em 0 1em',
        padding: '1em',
        maxWidth: '84.5vw'
    },
    mainPLast: {
        margin: '1em',
        padding: '1em'
    },
    mainPLastShortEn: {
        marginTop: '8em!important'
    }
});

const printStyle = {
    marginTop: '1em',
}

const none = {
}

    
export const Resume : FC = () => {
    const isMobile = useMediaQuery('(max-width:576px)');
    const togglePrint = useSelector((state: RootState) => state.printToggle.print);
    const toggleStatus = useSelector((state: RootState) => state.versionToggle.version);
    const toggleLang = useSelector((state: RootState) => state.langToggle.lang);
    const items = useSelector((state: RootState) => state.itemsDelivery.items);
    const classes = useStyles();

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('http://localhost:3000/database').then((response) => {
            dispatch(itemsDelivery(({
                _id: response.data[0]._id,
                photo: response.data[0].photo,
                nameRu: response.data[0].nameRu,
                nameEn: response.data[0].nameEn,
                position: response.data[0].position,
                age: response.data[0].age,
                location: response.data[0].location,
                educationRu: response.data[0].educationRu,
                educationEn: response.data[0].educationEn,
                number: response.data[0].number,
                telegram: response.data[0].telegram,
                email: response.data[0].email,
                github: response.data[0].github,
                lastjobEn: response.data[0].lastjobEn,
                lastjobRu: response.data[0].lastjobRu,
                hardSkills: { languages: response.data[0].hardSkills[0].languages, technologies: response.data[0].hardSkills[0].technologies, patterns: response.data[0].hardSkills[0].patterns, instruments: response.data[0].hardSkills[0].instruments },
                about: { shortRu: response.data[0].about[0].shortRu, shortEn: response.data[0].about[0].shortEn, fullRu: response.data[0].about[0].fullRu, fullEn: response.data[0].about[0].fullEn },
                softSkillsEn: response.data[0].softSkillsEn,
                softSkillsRu: response.data[0].softSkillsRu
            })))
        })
    }, [])
    return (
        <ThemeProvider theme={togglePrint ? printTheme : theme}>
            <Container>
            <CssBaseline />
            <Navbar />
            <Paper className={classes.mainP}>
                <Contacts/>
            </Paper>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                className={classes.root}>
            <Grid item xl={12}>
                <Paper className={isMobile ? classes.mainPMobile : classes.mainP}>
                        <Typography variant="h4" gutterBottom>
                        {toggleLang ? 'Last Job' : 'Прошлая работа'}
                    </Typography>
                    <Jobs/>
                </Paper>
            </Grid>
            <Grid item xl={12}>
                    <Box sx={(!toggleStatus && togglePrint) ? printStyle : none}>
                <Paper className={classes.mainP}>
                    <Typography variant="h4">
                        {toggleLang ? 'About Me' : 'О себе'}
                    </Typography>
                    <About/>
                </Paper>
            </Box>
            </Grid>
            </Grid>
                <Paper className={classes.mainP}>
                    <Skills/>
                </Paper>
                <Paper className={toggleStatus && togglePrint && toggleLang ? classes.mainPLastShortEn : classes.mainPLast}>
                    <Portfolio/>
                </Paper>
            </Container>
        </ThemeProvider>

    );
};