import { useState, useEffect, forwardRef } from 'react'
import Auth from '@/blocks/auth'
import CMS from '@/blocks/cms'
import jwt from 'jsonwebtoken'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Gates () {

  const [authed, setAuthed] = useState(false)

  const checkIsAuthorized = () => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      const decodedToken = jwt.decode(token)
      if (decodedToken) {
        if (new Date(decodedToken.exp * 1000 ) - new Date() > 0)
          setAuthed(true)
      }
    }
  }

  useEffect(() => {
    checkIsAuthorized()
  }, [])

  const [snackbar, setSnackbar] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar(false);
  };

  const [response, setResponse] = useState({ type: '', msg: '', status: 0 })

  const logHandler = (res) => {
    setResponse(res)
    setSnackbar(true)
  }

  return (
    <div>
      <Snackbar open={snackbar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={response.type} sx={{ width: '100%' }}>
          Status {response.status}: {response.msg}
        </Alert>
      </Snackbar>
      {
         authed ? <CMS logHandler={ logHandler }/> : <Auth logHandler={ logHandler }/>
      }
    </div>
  )
}
