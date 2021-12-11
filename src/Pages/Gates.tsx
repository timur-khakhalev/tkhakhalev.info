import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import jwt from 'jsonwebtoken'
import { RootState } from '../Redux/store'
import { Login } from '../Components/Login'
import { CMS } from './CMS'
import { Snack } from '../Components/Snack'
import { expiredToggle } from '../Redux/slice'

export const Gates: FC = () => {
    const dispatch = useDispatch()
    const checkLoggedInState = useSelector((state: RootState) => state.checkLoggedIn.loggedIn);
    const expiredTokenState = useSelector((state: RootState) => state.checkLoggedIn.expiredToken);
    const checkLoggedIn = localStorage.getItem('token')

    useEffect(() => {
        const token: string | null = localStorage.getItem('token')
        if (token) {
            const decoded: any = jwt.decode(token)
            const expiresInSec = decoded.exp*1000 - Date.parse(new Date().toString())
            console.log(expiresInSec)
            if (expiresInSec > 0) {
                setTimeout(() => {
                    dispatch(expiredToggle())
                    localStorage.removeItem('token')
                }, expiresInSec)
            } else {
                dispatch(expiredToggle())
                localStorage.removeItem('token')
            }
        }
    }, [checkLoggedInState, expiredTokenState])
    if (checkLoggedIn) {
        return (
            <>
            <CMS/>
            {expiredTokenState ? <Snack message='Token has expired!' type='warning' /> : ''}
            </>
        )
    } else {
    return (
        <Login/>
        )
    }
}
