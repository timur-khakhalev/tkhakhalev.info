import React, {FC} from 'react';
import copy from 'clipboard-copy'
import { makeStyles } from '@mui/styles';
import {Typography, Grid, Box, Button, Tooltip, Stack} from '@mui/material/';
import { Telegram, Email, GitHub, Call, Language} from '@mui/icons-material';
import {useSelector} from 'react-redux'
import {RootState} from '../Redux/store'
import { calculateAge } from '../utils';
import { Loading } from './Loading';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    mainP: {
        margin: '1em',
        padding: '1em'
    },
    photo: {
        maxHeight: '25em',
        margin: '0 auto',
        textAlign: 'center',
    },
    button: {
        margin: '1em 0 0 0'
    },
    buttonPrint: {
        margin: 0
    }

});
export const Contacts : FC = () => {
    const togglePrint = useSelector((state: RootState) => state.printToggle.print);
    const toggleLang = useSelector((state: RootState) => state.langToggle.lang);
    const items = useSelector((state: RootState) => state.itemsDelivery.items);
    const classes = useStyles();
    const [value, setValue] = React.useState(false);
    const handleClick = () => {
        copy(items.email)
        setValue(true)
    }
    if (items) {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            className={classes.root}>
            <Grid item md={6} sm={6} xs={togglePrint ? 7 : 12} lg={6}>
                <Typography variant="h3">
                    {toggleLang ? items.nameEn : items.nameRu}
                </Typography>
                <Typography gutterBottom variant="h5">
                    {items.position}, {calculateAge(items.age) + ( toggleLang ? ' years old': ' лет' )}. {items.location}
                </Typography>
                <Typography gutterBottom variant="body1">
                    {toggleLang
                        ? items.educationEn
                        : items.educationRu}
                </Typography>
                <Stack direction={togglePrint ? 'row' : 'column'} spacing={2}>
                {togglePrint ? <Box>
                        <Button 
                        size="small"
                        variant="text"
                        startIcon={<Call/>}>+{items.number}</Button>
                </Box> : <></> }
                
                <Box className={togglePrint ? classes.buttonPrint : classes.button}>
                    <Tooltip disableFocusListener placement="top" title={value ? 'Copied' : 'Copy'}>
                            <Button size="small" color="primary" variant={togglePrint ? 'text' : 'contained'} onClick={handleClick} className={classes.button} startIcon={< Email />}>{items.email}</Button>
                    </Tooltip>
                </Box>
                </Stack>
                <Stack direction={togglePrint ? 'row' : 'column'}>
                <Box className={togglePrint ? classes.buttonPrint : classes.button}>
                    <Button
                        size="small"
                        variant={togglePrint ? 'text' : 'contained'}
                        startIcon={< Telegram />}
                        href={`https://t.me/${items.telegram}`}>{items.telegram}</Button>
                </Box>

                <Box className={togglePrint ? classes.buttonPrint : classes.button}>
                    <Button sx={{whiteSpace: 'nowrap'}}
                        size="small"
                        startIcon={< GitHub />}
                        variant={togglePrint ? 'text' : 'contained' }
                            href={items.github}>{togglePrint ? items.github.replace(/https:\/\/github.com\//, '') : items.github.replace(/https:\/\//, '')}</Button>
                </Box>
                    {togglePrint ? <Box>
                        <Button
                            size="small"
                            variant="text"
                            startIcon={<Language />}>tkhakhalev.info</Button>
                    </Box> : <></>}
                </Stack>
            </Grid>
            <Grid item md={5} sm={6} xs={togglePrint ? 4 : 12} lg={4}>
                <Box component="img" sx={togglePrint ? {maxHeight: '13em'} : {maxHeight: '20.5em'}} src={items.photo} className={classes.photo} />
            </Grid>
        </Grid>
    );
    } else {
        return (
            <Loading/>
        )
    }
};