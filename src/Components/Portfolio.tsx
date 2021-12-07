import React, {FC, useEffect, useState} from 'react';
import axios from 'axios'
import { IPortfolio } from '../interfaces'
import resume from '../resume.json'
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip'
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import { GitHub } from '@mui/icons-material';
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store'




const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    cardFull: {
        minHeight: '16em',
        margin: '1em',
        textAlign: 'justify',
    },
    card: {
        minHeight: '19em',
        margin: '1em'
    },
    cardP : {
        height: 'auto',
        margin: '.5em!important'
    }
});
export const Portfolio: FC = () => {
    const classes = useStyles();
    const toggleStatus = useSelector((state: RootState) => state.versionToggle.version);
    const togglePrint = useSelector((state: RootState) => state.printToggle.print);
    const toggleLang = useSelector((state: RootState) => state.langToggle.lang);

    const [gitdata, setGitdata] = useState<any>()
    useEffect(() => {
        axios.get(`https://${process.env.BACKEND_URL}`).then((response) => {
            setGitdata(response.data)
        })
    }, [])
    if (gitdata) {
        return (
            <div>
                <Typography variant="h4">
                    {toggleLang ? 'My Projects': 'Мои проекты'}
                </Typography>
                <Grid direction="row"
                    justifyContent="center"
                    alignItems="center"
                    className={classes.root}
                    container>
                        {gitdata.map((data: any, i: number) => {
                            if (i < 4) {
                                return <Grid item xs={12} sm={12} lg={4} md={12}>
                                    <Card sx={{height: {md: 'auto'}}} variant="outlined" className={ togglePrint ? classes.cardP : (toggleStatus ? classes.card : classes.cardFull)}>
                                        <CardContent>
                                            <Typography variant="h6">
                                                <Button size="large" startIcon={<GitHub/>} variant="text" href={data[1].html_url}>{data[1].name}</Button>
                                            </Typography>
                                            <Typography variant="caption" color="initial">
                                                Last modified: {new Date(data[1].updated_at).toLocaleString('ru-RU')}
                                            </Typography>
                                            <Typography paragraph variant="caption" color="initial">
                                                Commits amount: {data[0]}
                                            <Box>
                                            <Chip label={data[1].language} />
                                            {data[1].topics.map((t: string) => {
                                                console.log(t)
                                                return <Chip sx={{my: '.5em'}} label={t}/>
                                            })}
                                            </Box>
                                            <Typography>
                                                {data[1].description}
                                            </Typography>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            }
                        })
                        }
                </Grid>
            </div>
        );
    } else {
        return (
            <Typography variant="h6" align="center">Loading.. <CircularProgress/></Typography>
        )
    }
};