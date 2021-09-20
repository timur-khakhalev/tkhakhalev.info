import {FC} from 'react';
import resume from '../resume.json'
import {IAbout} from '../interfaces'
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store'

const user: IAbout = {
    textFull: resume.about.full,
    textShort: resume.about.short
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
    return (
            <Typography align="justify" variant="body1" className={classes.txt} gutterBottom>
            {toggleStatus ? user.textShort : user.textFull}
            </Typography>
    );
};
