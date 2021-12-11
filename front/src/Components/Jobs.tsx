import { FC } from 'react';
import { makeStyles } from '@mui/styles';
import {Typography} from '@mui/material/';
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store'
import { Loading } from './Loading';

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
    const items = useSelector((state: RootState) => state.itemsDelivery.items);
    if (items) {
        return (
            <Typography variant="body1" className={classes.text}>
                {toggleLang ? items.lastjobEn : items.lastjobRu}
            </Typography>
            )
    } else {
        return (<Loading/>)
    }
};

