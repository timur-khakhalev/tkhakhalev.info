import {FC} from 'react';
import {makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Jobs} from './Jobs'
import {About} from './About';
import {Navbar} from './Navbar'
import {Skills} from './Skills';
import {Contacts} from './Contacts'
import {Portfolio} from './Portfolio'
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store'
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';


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
    }    
});

const printStyle = {
    marginTop: '3em',
}

const none = {
}
export const Resume : FC = () => {
    const isMobile = useMediaQuery('(max-width:576px)');
    const togglePrint = useSelector((state: RootState) => state.printToggle.print);
    const toggleStatus = useSelector((state: RootState) => state.versionToggle.version);
    const classes = useStyles();
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
                        Прошлая работа
                    </Typography>
                    <Jobs/>
                </Paper>
            </Grid>
            <Grid item xl={12}>
                    <Box sx={(!toggleStatus && togglePrint) ? printStyle : none}>
                <Paper className={classes.mainP}>
                    <Typography variant="h4">
                        О себе
                    </Typography>
                    <About/>
                </Paper>
            </Box>
            </Grid>
            </Grid>
                <Paper className={classes.mainP}>
                    <Skills/>
                </Paper>
                <Paper className={classes.mainPLast}>
                    <Portfolio/>
                </Paper>
            </Container>
        </ThemeProvider>

    );
};