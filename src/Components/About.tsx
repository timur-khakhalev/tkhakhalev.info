import {FC} from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store'
import { Loading } from './Loading';

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
    const items = useSelector((state: RootState) => state.itemsDelivery.items);
    if (items) {
        if (toggleLang) {
            return (
                <Typography align="justify" variant="body1" className={classes.txt} gutterBottom>
                    {toggleStatus ? items.about.shortEn : items.about.fullEn}
                </Typography>
            );
        } else {
            return (
                <Typography align="justify" variant="body1" className={classes.txt} gutterBottom>
                    {toggleStatus ? items.about.shortRu : items.about.fullRu}
                </Typography>
            );
        }
    } else { return (<Loading/>)}
    
};
