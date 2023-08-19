import {Box} from '@mui/material'
import {NavBar} from './NavBar'
import {useAppSelector} from '../hooks'

export const Profile = () => {
  const {username, email} = useAppSelector((state) => state.user.currentUser)

  return (
    <Box>
      <NavBar />
      <div>Your Profile</div>

      <p>{username}</p>
      <p>{email}</p>
    </Box>
  )
}
