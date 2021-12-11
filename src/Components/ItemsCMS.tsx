import React, {FC, useState, useEffect} from 'react'
import axios from 'axios'
import dotenv from 'dotenv'
import { useForm, SubmitHandler } from 'react-hook-form'
import { TextField, Paper, Box, Button, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { snackToggle } from '../Redux/slice'
import { IFormValues } from '../interfaces'
import { Snack } from './Snack'
import { Loading } from './Loading'
dotenv.config()

export const ItemsCMS: FC = () => {
    const [items, setItems] = useState<IFormValues>({
        '_id': '',
        'photo': '',
        'nameRu': '',
        'nameEn': '',
        'position': '',
        'age': '',
        'location': '',
        'educationRu': '',
        'educationEn': '',
        'number': 0,
        'telegram': '',
        'email': '',
        'github': '',
        'lastjobEn': '',
        'lastjobRu': '',
        'about': {'shortRu': '', 'shortEn': '', 'fullRu': '', 'fullEn': ''},
        'hardSkills': { 'languages': '', 'technologies': '', 'patterns': '', 'instruments': ''},
        'softSkillsEn': '',
        'softSkillsRu': ''
    })

    const [alert, setAlert] = useState<{show: boolean, message: string, type: string}>({
        show: false,
        message: '',
        type: ''
    })
    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios({
            method: 'get',
            url: `http://localhost:3000/database/`,
            headers: {
            'Authorization': `Bearer ${token}`
        }}).then((response) => {
            const {data} = response
            setItems({
                '_id': data[0]._id,
                'photo': data[0].photo,
                'nameRu': data[0].nameRu,
                'nameEn': data[0].nameEn,
                'position': data[0].position,
                'age': data[0].age,
                'location': data[0].location,
                'educationRu': data[0].educationRu,
                'educationEn': data[0].educationEn,
                'number': data[0].number,
                'telegram': data[0].telegram,
                'email': data[0].email,
                'github': data[0].github,
                'lastjobEn': data[0].lastjobEn,
                'lastjobRu': data[0].lastjobRu,
                'hardSkills': { 'languages': data[0].hardSkills[0].languages, 'technologies': data[0].hardSkills[0].technologies, 'patterns': data[0].hardSkills[0].patterns, 'instruments': data[0].hardSkills[0].instruments },
                'about': { 'shortRu': data[0].about[0].shortRu, 'shortEn': data[0].about[0].shortEn, 'fullRu': data[0].about[0].fullRu, 'fullEn': data[0].about[0].fullEn },
                'softSkillsEn': data[0].softSkillsEn,
                'softSkillsRu': data[0].softSkillsRu
            })
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const sendData = (dataToSend: {newData: object}) => {
        const token = localStorage.getItem('token')
        axios({
            method: 'patch',
            url: 'http://localhost:3000/database/upd',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: {
                "oldData": items._id,
                "newData": dataToSend.newData
            }
        }).then((res) => {
            setAlert({
                show: true,
                message: 'Updated success!',
                type: 'success'
            })
            dispatch(snackToggle())
        }).catch((err) => {
            console.log(err)
            setAlert({
                show: true,
                message: `Some error on sending ${err}`,
                type: 'error'
            })
        })
    }
    const { register, handleSubmit } = useForm({ mode: 'onSubmit' })
    const onSubmit: SubmitHandler<any> = data => {
        data.number = +data.number
        for (let [k, v] of Object.entries(data)) {
            for (let [_k, _v] of Object.entries(items)) {
                if (_k === 'about' || _k === 'hardSkills' ) {
                    Object.entries(items[_k]).map(([__k, __v]) => {
                        if (k === __k) {
                            if (!Object.is(v, __v)) {
                                let buff: any = {}
                                buff[_k] = JSON.parse(JSON.stringify([(items as any)[_k]]))
                                buff[_k][0][__k] = v
                                sendData({ "newData": buff })
                            }
                        }
                    })
                }
                if (k === _k) {
                    if (!Object.is(v, _v)) {
                        sendData({"newData": {[k]: v}})
                    }
                }
            }
        }
    }
    
    if (items) {
        return (
            <Box sx={{m: '0 auto', width: '70vw'}}>
                {
                    alert.show ? <Snack message={alert.message} type={alert.type} /> : ''
                }
                <Paper sx={{m: '1em', p: '1em'}}>
                    {
                        Object.entries(items).map(([k, v]) => {
                            switch(k) {
                                case 'softSkillsEn':
                                    if (v) {
                                    return <>
                                        <Typography paragraph align="center" variant='h6'>
                                            softSkillsEn
                                        </Typography>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                            <TextField
                                                margin='normal'
                                                defaultValue={v}
                                                {...register(k)}
                                                fullWidth
                                                multiline
                                            />
                                            <Button variant="contained" type="submit">Send</Button>
                                            </form>
                                        </>
                                    } else {return <></>}
                                case 'softSkillsRu':
                                    if (v) {
                                    return <>
                                        <Typography paragraph align="center" variant='h6'>
                                            softSkillsRu
                                        </Typography>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <TextField
                                                margin='normal'
                                                defaultValue={v}
                                                {...register(k)}
                                                fullWidth
                                                multiline
                                            />
                                            <Button variant="contained" type="submit">Send</Button>
                                        </form>
                                    </>
                                    } else { return <></>}
                                case 'hardSkills':
                                    return <>
                                    <Typography variant="h6" align="center">
                                        hardSkills
                                    </Typography>
                                        {Object.entries(items.hardSkills).map(([_k, _v]) => {
                                            if (_v[0]) {
                                                return <>
                                                    <form onSubmit={handleSubmit(onSubmit)}>
                                                        <TextField
                                                            label={_k}
                                                            margin='normal'
                                                            defaultValue={_v}
                                                            {...register(_k)}
                                                            fullWidth
                                                            multiline
                                                        />
                                                        <Button variant="contained" type="submit">Send</Button>
                                                    </form>
                                                </>
                                            }
                                            })}
                                        </>
                                case 'about':
                                    return <>
                                        <Typography variant="h6" align="center">
                                            about
                                        </Typography>
                                        {Object.entries(items.about).map(([_k, _v]) => {
                                            if (_v) {
                                            return <>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <TextField
                                                    label={_k}
                                                    margin='normal'
                                                    defaultValue={_v}
                                                    {...register(_k)}
                                                    fullWidth
                                                    multiline
                                                />
                                                <Button variant="contained" type="submit">Send</Button>
                                            </form>
                                            </>
                                            }
                                        })}
                                    </>
                                case '_id':
                                    if (v) {
                                    return <>
                                        <TextField
                                            label={k}
                                            margin='normal'
                                            defaultValue={v}
                                            disabled
                                        />
                                    </>
                                    } else {return <></>}
                                default:
                                    if (v) {
                                    return <>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                        <TextField
                                            label={k}
                                            margin='normal'
                                            defaultValue={v}
                                            fullWidth
                                            {...register(k)}
                                        />
                                            <Button variant="contained" type="submit">Send</Button>
                                    </form>
                                    </>
                                    }
                            }
                        })
                    }
                </Paper>
            </Box>
        )
    } else {
        return (
            <Loading/>
        )
    }
}
