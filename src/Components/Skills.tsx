import {FC} from 'react';
import resume from '../resume.json'
import {ISkills} from '../interfaces';
import {makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {useSelector} from 'react-redux'
import {RootState} from '../Redux/store'

// const user: ISkills = {
//     hardSkills: resume.skills.hardSkills.languages,
//     softSkillsFullEn: resume.skills.softSkillsFullEn,
//     softSkillsFullRu: resume.skills.softSkillsFullRu,
// }

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
        {/* <Grid container justifyContent="center" className={classes.skills}> {
       user.hardSkills.languages.map((k: object) => {
                return <Grid item xs={4}>
                    <Typography variant="body1" className={classes.box}>{k}</Typography>
                </Grid>
            })
        }</Grid> */}
        {!toggleStatus ? 
        <>
            {/* <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Typography gutterBottom align="center" variant="h5">
                        Soft skills
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent="space-between" className={classes.root}>
                {toggleLang ? Object
                .entries(user.softSkillsFullEn !)
                .map(([k, v]) => {
                    return <Grid item xs={12}>
                        <Typography variant="body1" className={classes.box2}>{v}</Typography>
                    </Grid>
                }) : 
                Object
                    .entries(user.softSkillsFullRu!)
                    .map(([k, v]) => {
                        return <Grid item xs={12}>
                            <Typography variant="body1" className={classes.box2}>{v}</Typography>
                        </Grid>
                    })
                }
            </Grid> */}
            </>
            
        : <></>}
    </>
    );
};