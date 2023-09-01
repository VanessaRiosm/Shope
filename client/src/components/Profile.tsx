import {Box} from '@mui/material'
import {NavBar} from './NavBar'
import {useAppSelector} from '../hooks'
import {Footerr} from './Footer'
import {Navigate} from 'react-router-dom'

export const Profile = () => {
  const {username, email} = useAppSelector((state) => state.user.currentUser)
  const rol = useAppSelector((state) => state.user.rol)

  return (
    <>
      {rol === 'user' || rol === 'admin' ? (
        <Box>
          <NavBar />
          <div>Your Profile</div>

          <p>{username}</p>
          <p>{email}</p>
          <Footerr />
        </Box>
      ) : (
        <Box>{<Navigate to='/' />}</Box>
      )}
    </>
  )
}
