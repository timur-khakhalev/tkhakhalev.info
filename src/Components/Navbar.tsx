import React, {FC} from 'react';
import {useDispatch} from 'react-redux'
import {printToggle, versionToggle} from '../Redux/slice'
import {makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import {Print} from '@mui/icons-material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';

import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store'

const useStyles = makeStyles({
    paper: {
        margin: '1em',
        padding: '1em'
    }
})



export const Navbar : FC = () => {
    const isMobile = useMediaQuery('(max-width:576px)');

    const dispatch = useDispatch();
    const classes = useStyles();

    const handlePrintToggle = () => {
        dispatch(printToggle());        
        setTimeout(()=>window.print(), 100);
        window.addEventListener('afterprint', (event) => {
            dispatch(printToggle());
        });
        
    }

    const [swState,
        setState] = React.useState({checkedA: false});

    const handleChangeSwitch = (event : React.ChangeEvent < HTMLInputElement >) => {
        setState({
            ...swState,
            [event.target.name]: event.target.checked
        });
        dispatch(versionToggle());
    };
    const togglePrint = useSelector((state: RootState) => state.printToggle.print);
    if (togglePrint) return (<></>) 
    else {

    return ( <> 
        {isMobile ? 
            <Box sx={{ flexGrow: 1, py: '1.5em' }}>
            <AppBar sx={{py: '.8em'}}>
                <Grid container alignItems="center" justifyContent="center" direction="row">
                    <Grid item xs={5}>
                        <FormControl>
                            <FormControlLabel
                                control={< Checkbox sx={{color: '#fff'}} color="secondary" checked={
                                    swState.checkedA
                                }
                                    onChange={
                                        handleChangeSwitch
                                    }
                                    name="checkedA" />}
                                label="Полная версия" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <Button onClick={handlePrintToggle} size="large" variant="outlined" color="info" startIcon={< Print />}>Печать</Button>
                    </Grid>
                </Grid>
            </AppBar>
            </Box>
        : <Paper className={classes.paper}>
                <Stack direction="row" spacing={2}>
                    <FormControl>
                        <FormControlLabel
                            control={< Checkbox color="secondary" checked={
                                swState.checkedA
                            }
                                onChange={
                                    handleChangeSwitch
                                }
                                name="checkedA" />}
                            label="Полная версия" />
                    </FormControl>
                    <Button onClick={handlePrintToggle} size="large" variant="outlined" startIcon={< Print />}>Печать</Button>
                </Stack>
            </Paper>
        
    }
        </>
    )
}
};