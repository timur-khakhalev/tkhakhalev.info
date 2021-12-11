import {FC} from 'react';
import {makeStyles } from '@mui/styles';
import {Grid, Typography, Box} from '@mui/material/';
import {useSelector} from 'react-redux'
import {RootState} from '../Redux/store'
import { Loading } from './Loading';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    skills: {
        margin: '1.5em 0'
    },
    box: {
        margin: '0 auto'
    },
    box2: {
        margin: '.5em 0',
        textIndent: '1em'
    }

});

export const Skills : FC = () => {
    const classes = useStyles();
    const toggleStatus = useSelector((state: RootState) => state.versionToggle.version);
    const toggleLang = useSelector((state: RootState) => state.langToggle.lang);
    const items = useSelector((state: RootState) => state.itemsDelivery.items);
    if (items) {
        return ( 
        <>
        <Grid 
        container
        className={classes.root}>
            <Grid item xs={12}>
                    <Typography variant="h4">
                        {toggleLang ? 'Skills' : 'Навыки'}
                    </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography align="center" variant="h5">
                    {toggleLang ? 'My stack' : 'Мой стэк'}
                </Typography>
            </Grid>
            </Grid>
            <Grid container justifyContent="center" className={classes.skills}> 
            {
            Object.entries(items.hardSkills).map(([k, v]) => {
                switch(k) {
                    case 'languages':
                        return <>
                        <Grid item xs={12}><Typography variant="h6" color="initial">
                            Languages, Frameworks, etc
                        </Typography></Grid>
                        {v.split(';').map((_v) => {
                            if (v) {
                            console.log(_v)
                                return <>
                                <Grid item xs={3}>
                                <Typography variant="body1" className={classes.box}>{_v}</Typography>
                            </Grid></>
                            }
                        })}</>
                    case 'technologies':
                        return <>
                            <Grid item xs={12}><Typography variant="h6" color="initial">
                                Technologies
                            </Typography></Grid>
                            {v.split(';').map((_v) => {
                                if (v) {
                                    console.log(_v)
                                    return <>
                                        <Grid item xs={3}>
                                            <Typography variant="body1" className={classes.box}>{_v}</Typography>
                                        </Grid></>
                                }
                            })}</>
                    case 'patterns':
                        return <>
                            <Grid item xs={12}><Typography variant="h6" color="initial">
                                Patterns
                            </Typography></Grid>
                            {v.split(';').map((_v) => {
                                if (v) {
                                    console.log(_v)
                                    return <>
                                        <Grid item xs={3}>
                                            <Typography variant="body1" className={classes.box}>{_v}</Typography>
                                        </Grid></>
                                }
                            })}</>
                    case 'instruments':
                        return <>
                            <Grid item xs={12}><Typography variant="h6" color="initial">
                                Instruments
                            </Typography></Grid>
                            {v.split(';').map((_v) => {
                                if (v) {
                                    console.log(_v)
                                    return <>
                                        <Grid item xs={3}>
                                            <Typography variant="body1" className={classes.box}>{_v}</Typography>
                                        </Grid></>
                                }
                            })}</>
                    default:
                        return <></>
                }
                    
                })
            }</Grid>
            {!toggleStatus ? 
            <>
                <Grid container className={classes.root}>
                    <Grid item xs={12}>
                        <Typography gutterBottom align="center" variant="h5">
                            Soft skills
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent="space-between" className={classes.root}>
                    {toggleLang ? 
                    items.softSkillsEn.split(';')
                    .map((item) => {
                        return <Grid item xs={12}>
                            <Typography variant="body1" className={classes.box2}>{item}</Typography>
                        </Grid>
                    }) : 
                    items.softSkillsRu.split(';')
                        .map((item) => {
                            return <Grid item xs={12}>
                                <Typography variant="body1" className={classes.box2}>{item}</Typography>
                            </Grid>
                        })
                    }
                </Grid>
                </>
                
            : <></>}
        </>
        );
    } else { return (<Loading/>)}
};