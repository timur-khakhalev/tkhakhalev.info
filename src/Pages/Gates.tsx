import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store'
import { Login } from '../Components/Login'
import { CMS } from './CMS'
interface Props {
    
}

export const Gates: FC = () => {
    const checkLoggedInState = useSelector((state: RootState) => state.checkLoggedIn.loggedIn);
    const checkLoggedIn = localStorage.getItem('token')
    useEffect(() => {
    }, [checkLoggedInState])
    console.log(checkLoggedIn)
    if (checkLoggedIn) {
        return (
            <CMS/>
        )
    } else {
    return (
        <Login/>
        )
    }
}
