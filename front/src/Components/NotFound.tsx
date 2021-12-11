import {FC} from 'react'
import { Typography, Box } from '@mui/material'
import Error from '../img/404error.gif'

export const NotFound: FC = () => {
    return (
        <div>
            <Typography variant='h1' align="center">
                404 error
            </Typography>
            <Typography variant="h5" align="center">
                my face now is like:
            </Typography>
            <Box sx={{m: '0 auto', height: '20em'}}>
                <img className="imgerror" src={Error}/>
            </Box>
        </div>
    )
}
