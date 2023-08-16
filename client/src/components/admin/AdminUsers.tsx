import {useEffect} from 'react'
import {useAppSelector, useAppDispatch} from '../../hooks'
import {fetchGetUsers} from '../../features/users/userSlice'
import {Box} from '@mui/material'

export const AdminUsers = () => {
  const users = useAppSelector((state: any) => state.user.usersList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGetUsers())
  }, [])

  return (
    <Box>
      {users &&
        users.map((user: any) => (
          <div>
            <p>{user.email}</p>
            <p>{user.username}</p>
            <p>{user.rol}</p>
          </div>
        ))}
    </Box>
  )
}
