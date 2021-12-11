import React, {FC} from 'react'
import { Stack, Box, TextField, Typography, Button, Paper } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { checkLoggedIn } from '../Redux/slice'

interface Inputs {
    login: string,
    password: string
}

export const Login: FC = () => {
    const { register, handleSubmit, watch} = useForm({mode: 'onSubmit'})
    const dispatch = useDispatch()
    const onSubmit: SubmitHandler<Inputs> = data => data
    const handleAuth = (e: React.FormEvent) => {
        e.preventDefault();
        handleSubmit(onSubmit)
        axios({
            method: 'post',
            url: 'http://localhost:3000/auth',
            data: {
                login: watch('login'),
                password: watch('password')
            }
        }).then((response) => {
            localStorage.setItem('token', response.data.access_token)
            dispatch(checkLoggedIn({payload: response.data.access_token}))
        })
    }
    return (
        <Box sx={{m: '0 auto', width: '20vw'}}>
        <Paper sx={{m: '1em', p: '1em', width: 'auto'}}>
            <Stack>
                    <Typography variant="h6" color="initial" align="center">
                        THA GATES
                    </Typography>
                    <form onSubmit={handleAuth}>
                        <TextField
                        autoFocus
                        id="login"
                        label="Login"
                        margin="dense"
                        type="login"
                        {...register("login")}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            margin="dense"
                            type="password"
                            {...register("password")}
                        />
                        <Button type="submit">
                            Send
                        </Button>
                    </form>
            </Stack>
        </Paper>
        </Box>
    )
}
