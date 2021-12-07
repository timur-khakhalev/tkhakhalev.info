import {FC} from 'react';
import resume from '../resume.json'
import {IAbout} from '../interfaces'
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store'

const user: IAbout = {
    textFullEn: resume.about.fullEn,
    textFullRu: resume.about.fullRu,
    textShortEn: resume.about.shortEn,
    textShortRu: resume.about.shortRu
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    txt: {
        margin: '1em'
    }

});

export const About: FC = () => {
    const classes = useStyles();
    const toggleStatus = useSelector((state: RootState) => state.versionToggle.version);
    const toggleLang = useSelector((state: RootState) => state.langToggle.lang);
    if (toggleLang) {
        return (
            <Typography align="justify" variant="body1" className={classes.txt} gutterBottom>
                {toggleStatus ? user.textShortEn : user.textFullEn}
            </Typography>
        );
    } else {
        return (
            <Typography align="justify" variant="body1" className={classes.txt} gutterBottom>
                {toggleStatus ? user.textShortRu : user.textFullRu}
            </Typography>
        );
    }
    
};
