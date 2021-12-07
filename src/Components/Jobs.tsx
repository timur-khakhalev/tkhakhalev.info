import { FC } from 'react';
import resume from '../resume.json'
import { makeStyles } from '@mui/styles';

import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store'

interface IJobsShort {
    jobsEn: string,
    jobsRu: string
}

const user: IJobsShort = {
    jobsEn: resume.lastjobShortEn,
    jobsRu: resume.lastjobShortRu,
}

const useStyles = makeStyles({
    table: {
        margin: '.5em 0 0 0',
    },
    text: {
        margin: '1em 0'
    }
});

export const Jobs : FC = () => {
    const classes = useStyles();
    const toggleLang = useSelector((state: RootState) => state.langToggle.lang);
    
    return (
        <Typography variant="body1" className={classes.text}>
            {toggleLang ? user.jobsEn : user.jobsRu}
        </Typography>
        )
};

