import React, {FC} from 'react';
import resume from '../resume.json'
import {IUser} from '../interfaces'
import copy from 'clipboard-copy'
import Photo from '../img/photo.JPG'
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import { Telegram, Email, GitHub, Call, Language} from '@mui/icons-material';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import {useSelector} from 'react-redux'
import {RootState} from '../Redux/store'

const user : IUser = {
    nameRu: resume.nameRu,
    nameEn: resume.nameEn,
    photo: Photo,
    vacancy: resume.position,
    age: resume.age,
    locationEn: resume.locationEn,
    locationRu: resume.locationRu,
    educationEn: resume.educationEn,
    educationRu: resume.educationRu,
    number: resume.number,
    tg: resume.tg,
    wa: resume.wa,
    email: resume.email,
    github: resume.github
}

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
    const classes = useStyles();
    const [value, setValue] = React.useState(false);

    const handleClick = () => {
        copy(user.email)
        setValue(true)
    }
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            className={classes.root}>
            <Grid item md={6} sm={6} xs={togglePrint ? 7 : 12} lg={6}>
                <Typography variant="h3">
                    {toggleLang ? user.nameEn : user.nameRu}
                </Typography>
                <Typography gutterBottom variant="h5">
                    {user.vacancy}, {user.age + ( toggleLang ? ' years old': ' лет' )}. {toggleLang ? user.locationEn : user.locationRu}
                </Typography>
                <Typography gutterBottom variant="body1">
                    {toggleLang
                        ? user.educationEn
                        : user.educationRu}
                </Typography>
                <Stack direction={togglePrint ? 'row' : 'column'} spacing={2}>
                {togglePrint ? <Box>
                        <Button 
                        size="small"
                        variant="text"
                        startIcon={<Call/>}>+{user.number}</Button>
                </Box> : <></> }
                
                <Box className={togglePrint ? classes.buttonPrint : classes.button}>
                    <Tooltip disableFocusListener placement="top" title={value ? 'Copied' : 'Copy'}>
                            <Button size="small" color="primary" variant={togglePrint ? 'text' : 'contained'} onClick={handleClick} className={classes.button} startIcon={< Email />}>{user.email}</Button>
                    </Tooltip>
                </Box>
                </Stack>
                <Stack direction={togglePrint ? 'row' : 'column'}>
                <Box className={togglePrint ? classes.buttonPrint : classes.button}>
                    <Button
                        size="small"
                        variant={togglePrint ? 'text' : 'contained'}
                        startIcon={< Telegram />}
                        href={`https://t.me/${user.tg}`}>{user.tg}</Button>
                </Box>

                <Box className={togglePrint ? classes.buttonPrint : classes.button}>
                    <Button sx={{whiteSpace: 'nowrap'}}
                        size="small"
                        startIcon={< GitHub />}
                        variant={togglePrint ? 'text' : 'contained' }
                            href={user.github}>{togglePrint ? user.github.replace(/https:\/\/github.com\//, '') : user.github.replace(/https:\/\//, '')}</Button>
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
                <Box component="img" sx={togglePrint ? {maxHeight: '13em'} : {maxHeight: '20.5em'}} src={user.photo} className={classes.photo} />
            </Grid>
        </Grid>
    );
};