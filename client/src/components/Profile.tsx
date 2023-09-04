import {useEffect} from 'react'
import {Box} from '@mui/material'
import {NavBar} from './NavBar'
import {useAppDispatch, useAppSelector} from '../hooks'
import {Footerr} from './Footer'
import {Navigate} from 'react-router-dom'
import {fetchCurrentUser} from '../features/users/userSlice'
import {FaUserCircle} from 'react-icons/fa'

export const Profile = () => {
  const {username, email, rol} = useAppSelector(
    (state) => state.user.currentUser
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [])

  return (
    <div>
      {rol === 'user' || rol === 'admin' ? (
        <Box display='grid'>
          <NavBar />
          <Box mt='100px'>
            <FaUserCircle size='60px' />
            <div>Your Profile info</div>

            <p> name: {username}</p>
            <p> email: {email}</p>
            <Box bottom='0' width='100%' position='fixed'>
              <Footerr />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>{<Navigate to='/' />}</Box>
      )}
    </div>
  )
}
