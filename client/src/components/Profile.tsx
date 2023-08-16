import {Box} from '@mui/material'
import {NavBar} from './NavBar'

const user = {
  id: 1,
  username: 'Vanessa',
  email: 'example@gmail.com',
}

export const Profile = () => {
  return (
    <Box>
      <NavBar />
      <div>Tu perfil</div>

      <p>{user.username}</p>
      <p>{user.email}</p>
    </Box>
  )
}
